const router = require("express").Router();
const Book = require("../models/Book.model");

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ error: "Invalid ID format" });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
});

router.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
});

router.put("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ error: "Invalid ID format" });
    } else if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
});

router.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book deleted" });
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ error: "Invalid ID format" });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
});

module.exports = router;
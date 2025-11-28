## The Library (due by CP 4)

### Introduction

In this lab, you’ll build a small **API for managing books** using **Node.js**, **Express**, and **Mongoose**.

By the end of the exercise, you will:

- Understand how to define and validate Mongoose models
- Practice connecting to MongoDB
- Learn basic CRUD operations
- Handle errors gracefully
- Test your API using **Postman**

## Requirements

1. Fork this repository
2. Clone it to your local machine
3. Run the following commands to set up your project:
    
    ```bash
    npm install
    npm start
    
    ```
    

## Iteration 0 – Initial Setup

Inside your project folder:

- You’ll find an `index.js` file where you’ll configure Express and Mongoose.
- Create a folder `/models` to store your Mongoose models.
- Create a folder `/routes` to store your Express routes.

You’ll connect to MongoDB using Mongoose like this:

```jsx
const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/book-library";

mongoose
  .connect(MONGODB_URI)
  .then(x => console.log(`Connected to MongoDB: ${x.connection.name}`))
  .catch(err => console.error("Error connecting to MongoDB", err));

```

## Iteration 1 – Book Schema

Create a file `/models/Book.model.js` and define the following schema:

| Field | Type | Validation / Notes |
| --- | --- | --- |
| title | String | **Required**, unique |
| author | String | **Required** |
| genre | String | Enum: `Fiction`, `Non-Fiction`, `Sci-Fi`, `Fantasy`, `Biography`, `Other` |
| publishedYear | Number | Minimum value: 0 |
| rating | Number | Default: 0, Minimum: 0, Maximum: 5 |
| createdAt | Date | Default: today |

Export the model:

```jsx
module.exports = mongoose.model("Book", bookSchema);

```

## Iteration 2 – Create Book Routes

Create a file `/routes/book.routes.js` and add the following routes:

| Method | Route | Description |
| --- | --- | --- |
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get one book by ID |
| POST | `/books` | Create a new book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

Remember to handle errors properly:

- Return **400** for validation errors
- Return **404** if the book isn’t found
- Return **500** for unexpected errors

Example error handler:

```jsx
res.status(400).json({ error: error.message });

```

In `index.js`, import and use your routes:

```jsx
const bookRoutes = require("./routes/book.routes");
app.use("/api", bookRoutes);

```

## Iteration 3 – Test with Postman

1. Run your server:
    
    ```bash
    npm run dev
    
    ```
    
2. Open **Postman** and test all routes:
    - **POST** `/api/books` → create a new book
    - **GET** `/api/books` → list all books
    - **GET** `/api/books/:id` → get one
    - **PUT** `/api/books/:id` → edit a book
    - **DELETE** `/api/books/:id` → delete one

💡 *Tip:* Use the “Body → raw → JSON” tab to send JSON data when testing POST and PUT requests.

---

## Iteration 4: Close Database

After your operations, gracefully close the database connection:

```jsx
mongoose.connection.close();

```

Use this when running short scripts (like seed files).

## (Bonus) Iteration 4 – Error Handling Practice

Enhance your routes to handle these scenarios:

- If a required field is missing → respond with 400 and a helpful message.
- If the book ID format is invalid → catch the `CastError` from Mongoose and respond with 400.
- Wrap all database operations in `try/catch`.

Example:

```jsx
try {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
} catch (error) {
  if (error.name === "CastError") {
    res.status(400).json({ error: "Invalid ID format" });
  } else {
    res.status(500).json({ error: "Server error" });
  }
}

```

## ✅ Submission

When finished:

```bash
git add .
git commit -m "Completed MongoDB + Mongoose API lab"
git push origin master

```

Then, create a **Pull Request** so we can review your work.

## ❤️ Happy Coding!
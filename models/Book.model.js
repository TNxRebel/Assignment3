const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { 
    type: String, 
    required: true, 
    unique: true 
  },
  author: { 
    type: String, 
    required: true 
  },
  genre: { 
    type: String, 
    enum: ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Biography", "Other"] 
  },
  publishedYear: { 
    type: Number, 
    min: 0 
  },
  rating: { 
    type: Number, 
    min: 0, 
    max: 5, 
    default: 0 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("Book", bookSchema);
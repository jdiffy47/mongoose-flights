import mongoose from "mongoose"

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: { 
    type: Date, 
    default: function () {
      return new Date().getFullYear()
    },
    min: 1927
  },
  mpaaRating: {
    type: String,
    enum: ["G", "PG", "PG-13", "R"]
  },
  cast: [String],
  nowShowing: { type: Boolean, default: false },
}, {
  timestamps: true,
})

const Movie = mongoose.model("Movie", movieSchema)

export {
  Movie
}

// If we didn't have line 3
// const movieSchema = new mongoose.Schema({
  
// })
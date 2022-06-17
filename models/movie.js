import mongoose from "mongoose"

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  cast: [String],
  nowShowing: Boolean,
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
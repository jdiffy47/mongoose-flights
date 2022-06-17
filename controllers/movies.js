import { Movie } from "../models/movie.js"

function newMovie(req, res) {
  res.render("movies/new", {
    title: "Add Movie"
  })
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  console.log("IT WORKS!")
  console.log("FORM DATA:", req.body)
}

export {
  newMovie as new,
  create,
}
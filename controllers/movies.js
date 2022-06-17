import { Movie } from "../models/movie.js"

function newMovie(req, res) {
  res.render("movies/new", {
    title: "Add Movie"
  })
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(", ")
  }
  Movie.create(req.body)
  .then(movie => {
    console.log(movie)
    // SEND A GET REQUEST TO THIS URL!
    res.redirect(`/movies`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function index(req, res) {
  Movie.find({})
  .then(movies => {
    res.render("movies/index", {
      movies: movies,
      title: "All Movies",
    })
  })
}

export {
  newMovie as new,
  create,
  index,
}
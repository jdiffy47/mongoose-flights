import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  Flight.find({})
  .then(flights => {
    res.render("flights/new", {
    airline: "Add Flight",
    flights: flights
    })
  })
}

function create(req, res) {
  console.log("REQ.BODY:", req.body)
  Flight.create(req.body)
  .then(flight => {
    console.log("CREATED FLIGHT:", flight)
    res.redirect(`/flights`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render("flights/index", {
      flights: flights,
      title: "All Flights",
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      flight: flight,
      // airline: 'Airline Detail'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete
}
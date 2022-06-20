import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  Flight.find({})
  .then(flights => {
    res.render("flights/new", {
    title: "Add Flight",
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

export {
  newFlight as new,
  create,
  index
}
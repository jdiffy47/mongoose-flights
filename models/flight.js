import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: String,
  price: {type: Number, min: 0}
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: {
    type: String,
    required: true,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  tickets: [ticketSchema],
  
  meals: [{ type: Schema.Types.ObjectId, ref: 'Meal' }],

  departs: {
    type: Date,
    default: function() {
      const today = new Date()
      const oneYearPlus = today.getFullYear() + 1
      today.setFullYear(oneYearPlus)
      return today
    }
  },
}, {
  timestamps: true
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}

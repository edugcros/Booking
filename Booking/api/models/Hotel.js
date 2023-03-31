const { Schema, model } = require('mongoose');
const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Hotel", HotelSchema)
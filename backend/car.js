const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/car')

var CarSchema = new Schema({
  order_id: {
    type: String,
    required: true
  },
  uname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  add_from: {
    type: String,
    required: true
  },
  add_to: {
    type: String,
    required: true
  },
  add: {
    type: String
  },
  contact: {
    type: String,
    required: true
  },
  luggage: {
    type: Number,
    required: true
  },
  people_number: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('Car', CarSchema)
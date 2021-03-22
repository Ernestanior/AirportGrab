const express = require('express')
const router = express.Router()
const Car = require('./car')
const mongoose = require('mongoose');
const { json } = require('body-parser');

router.post('/car/v1/new', (req, res) => {
  console.log(req.body);
  new Car(req.body).save((err, car) => {
    if (err) { console.log(err); }
    else {
      res.send({
        "status": "200",
        "msg": "success",
        "result": car
      })
    }
  })
})
router.get('/car/v1/order/all', (req, res) => {
  Car.find((err, car) => {
    if (err) { console.log(err); }
    else {
      res.send({
        "status": "200",
        "msg": "success",
        "orders": car
      })
    }
  })
})
router.get('/car/v1/order/doing', (req, res) => {
  Car.find({
    status: "doing",
    email: req.query.email
  }, (err, car) => {
    if (err) { console.log(err); }
    else {
      res.send({
        "status": "200",
        "msg": "success",
        "orders": car
      })
    }
  })
})
router.get('/car/v1/order/done', (req, res) => {
  Car.find({
    status: "done",
    email: req.query.email
  }, (err, car) => {
    if (err) { console.log(err); }
    else {
      res.send({
        "status": "200",
        "msg": "success",
        "orders": car
      })
    }
  })
})
router.post('/car/v1/confirm', (req, res) => {
  console.log(req.body.order_id);
  Car.updateOne({ order_id: req.body.order_id }, {
    status: "done"
  }, (err, car) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(car);
      res.send({
        "status": "200",
        "msg": "success",
        "result": car
      })
    }
  })
})
router.post('/car/v1/delete', (req, res) => {
  console.log(req.body.order_id);
  Car.deleteOne({
    order_id: req.body.order_id
  }, (err, car) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(car);
      res.send({
        "status": "200",
        "msg": "success",
        "result": car
      })
    }
  })
})
// router.get('/car/v1/order', (req, res) => {
//   console.log(req.query)
//   if (req.query) {
//     if (req.query.search == 'doing') {
//       Car.find({
//         status: "待出发"
//       }, (err, car) => {
//         if (err) { console.log(err); }
//         else {
//           res.send({
//             "status": "200",
//             "msg": "success",
//             "orders": car
//           })
//         }
//       })
//     }
//   }
//   Car.find((err, car) => {
//     if (err) { console.log(err); }
//     else {
//       res.send({
//         "status": "200",
//         "msg": "success",
//         "orders": car
//       })
//     }
//   })
// })
module.exports = router
const express = require('express')
const router = express.Router()
const email = require('./email')
const User = require('./user')
const mongoose = require('mongoose');
const { json } = require('body-parser');

router.post('/car/v1/email', (req, res) => {
  console.log(req.body);
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err) { console.log(err); }
    else {
      if (user) {
        res.send({
          "status": "-1",
          "msg": "fail",
          "result": "Sorry, this email has been registered"
        })
      }
      else {
        sendEmail(req, res)
      }
    }
  })
})
router.post('/car/v1/email2', (req, res) => {
  sendEmail(req, res)
})
router.post('/car/v1/user/signup', (req, res) => {
  console.log(req.body);
  new User(req.body).save((err, user) => {
    if (err) {
      res.send({
        "msg": "fail",
        "result": err
      })
    }
    else {
      res.send({
        "status": "200",
        "msg": "success",
        "result": user
      })
    }
  })
})
router.post('/car/v1/user/modifypw', (req, res) => {
  console.log(req.body);
  User.updateOne({ email: req.body.email }, {
    password: req.body.password
  }, (err, user) => {
    if (err) {
      console.log(err);
      res.send({
        "status": "-1",
        "msg": "fail",
        "result": err
      })
    }
    else {
      console.log(user);
      res.send({
        "status": "200",
        "msg": "success",
        "result": user
      })
    }
  })
})
router.post('/car/v1/user/editprofile', (req, res) => {
  console.log(req.body);
  User.updateOne({ email: req.body.email }, {
    name: req.body.name
  }, (err, user) => {
    if (err) {
      console.log(err);
      res.send({
        "status": "-1",
        "msg": "fail",
        "result": err
      })
    }
    else {
      console.log(user);
      res.send({
        "status": "200",
        "msg": "success",
        "result": user
      })
    }
  })
})
router.post('/car/v1/user/forgot', (req, res) => {
  console.log(req.body);
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err) { console.log(err); }
    else {
      if (user) {
        res.send({
          "status": "200",
          "msg": "success",
          "result": {
            name: user.name,
            email: user.email
          }
        })
      }
      else {
        res.send({
          "status": "-1",
          "msg": "fail",
          "result": "Sorry, cannot find this account"
        })
      }
    }
  })
})
router.post('/car/v1/user/login', (req, res) => {
  console.log(req.body);
  User.findOne({
    email: req.body.email,
    password: req.body.password
  }, (err, user) => {
    if (err) { console.log(err); }
    else {
      if (user) {
        res.send({
          "status": "200",
          "msg": "success",
          "result": {
            name: user.name,
            email: user.email
          }
        })
      }
      else {
        res.send({
          "status": "-1",
          "msg": "fail",
          "result": "Sorry, wrong account or password"
        })
      }
    }
  })
})


const sendEmail = (req, res) => {
  let code = "";
  while (code.length < 6) {
    code += Math.floor(Math.random() * 10);
  }
  let mailOption = {
    from: "1712727321@qq.com",
    to: req.body.email,//收件人
    subject: "XXBC Register Vertification Code",//纯文本
    html: "<h1>Welcome to XXBC，your vertification code is：" + code + "</h1>"
  };
  email(mailOption, function () {
    res.send({
      "status": "200",
      "msg": "success",
      "result": { code: code }
    })
  }, function () {
    res.send({
      "status": "-2",
      "msg": "fail",
      "result": "Cannot send email to this email address"
    })
  })
}

module.exports = router
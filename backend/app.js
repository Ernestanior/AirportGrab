const express = require('express')
const app = express()
const car_router = require('./car_router')
const bodyparser = require('body-parser')
const user_router = require('./user_router')

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.use(car_router)
app.use(user_router)


app.listen(3000, () => {
  console.log('success start');
})

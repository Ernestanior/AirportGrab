const nodemailer = require('nodemailer')

var config = {
  host: 'smtp.qq.com',
  secureConnection: false,
  port: 465, //for QQ
  auth: {
    user: '1712727321@qq.com', //刚才注册的邮箱账号
    pass: 'yeknbpqdrenaccef'  //邮箱的授权码，不是注册时的密码
  }
};

// 创建一个SMTP客户端对象
var transporter = nodemailer.createTransport(config);

// 发送邮件
module.exports = function (mail, success, fail) {
  transporter.sendMail(mail, function (error, info) {
    if (error) {
      console.log(error);
      fail && fail()
    }
    else {
      success && success()
      console.log('mail sent:', info);
    }
  });
};
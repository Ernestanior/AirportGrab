import request from './request'

export function getAllOrder() {
  return request({
    url: "/car/v1/order/all"
  })
}
export function getDoingOrder(email) {
  return request({
    url: "/car/v1/order/doing",
    params: { email: email }
  })
}
export function getDoneOrder(email) {
  return request({
    url: "/car/v1/order/done",
    params: { email: email }
  })
}
export function newOrder(data) {
  return request({
    method: 'post',
    url: '/car/v1/new',
    data: data
  })
}
export function deleteOrder(data) {
  return request({
    method: 'post',
    url: '/car/v1/delete',
    data: { 'order_id': data.order_id }
  })
}
export function finishOrder(data) {
  return request({
    method: 'post',
    url: '/car/v1/confirm',
    data: { 'order_id': data.order_id }
  })
}
export function sendCode(email) {
  return request({
    method: 'post',
    url: '/car/v1/email',
    data: { 'email': email }
  })
}
export function sendCode2(email) {
  return request({
    method: 'post',
    url: '/car/v1/email2',
    data: { 'email': email }
  })
}
export function signUp(email, password) {
  return request({
    method: 'post',
    url: '/car/v1/user/signup',
    data: { 'email': email, 'password': password }
  })
}
export function modifyPw(email, password) {
  return request({
    method: 'post',
    url: '/car/v1/user/modifypw',
    data: { 'email': email, 'password': password }
  })
}
export function login(user) {
  return request({
    method: 'post',
    url: '/car/v1/user/login',
    data: user
  })
}
export function forgot(email) {
  return request({
    method: 'post',
    url: '/car/v1/user/forgot',
    data: { 'email': email }
  })
}
export function editProfile(email, name) {
  return request({
    method: 'post',
    url: '/car/v1/user/editprofile',
    data: { 'email': email, 'name': name }
  })
}
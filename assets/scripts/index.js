'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

$('.nav-item').click(function () {
  if ($(window).width() <= 568) {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 45
    }, 500)
    return false
  } else {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 500)
    return false
  }
})

// $('.nav-item').click(function () {
//   $('html, body').animate({
//     scrollTop: $($(this).attr('href')).offset().top - 70
//   }, 500)
//   return false
// })

$("a[href='#home']").click(function () {
  $('html, body').animate({ scrollTop: 0 }, 500)
  return false
})

// $('a').click(function () {
//   const el = $(this).attr('href')
//   $('html, body').animate({
//     scrollTop: el === 'home' ? $('body').offset().top : $(el).offset().top - 55
//   }, 500)
//   return false
// })

// $(document.body).animate({
//   'scrollTop': $('#skills').offset().top
// }, 2000)

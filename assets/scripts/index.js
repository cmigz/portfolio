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

$('a').click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500)
  return false
})

// $(document.body).animate({
//   'scrollTop': $('#skills').offset().top
// }, 2000)

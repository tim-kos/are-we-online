const areWeOnline = require('./index.js')
const assert = require('assert')

areWeOnline(function (err, online, resp) {
  assert.ok(online)
})

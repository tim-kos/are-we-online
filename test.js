const areWeOnline = require('./index.js')
const assert = require('assert')

areWeOnline(online => {
  assert.ok(online)
})

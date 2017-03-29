const got = require('got');

module.exports = function (cb) {
  const url = 'https://ipv4.icanhazip.com/'

  got(url)
  	.then(response => {
      const v4 = '(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}'
      let regex = new RegExp(v4, 'g')

      let isOnline = regex.test(response.body)
  		cb(null, isOnline, response.body)
  	})
  	.catch(error => {
  		cb(error, false)
  	})
}

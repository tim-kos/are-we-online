Simple function to check if we are online.

Installation:

```
npm install --safe are-we-online
```

Usage:

```
const areWeOnline = require('are-we-online')

areWeOnline(isOnline => {
  if (isOnline) {
    console.log('We are online')
  } else {
    console.log('We are not online')
  }
})
```

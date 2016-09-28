# env-get

Simple utility to get environment variables with an optional default.  
Throws an error if the variable is not found and no defult is supplied.

[![CircleCI](https://circleci.com/gh/billylaing/env-get/tree/master.svg?style=svg)](https://circleci.com/gh/billylaing/env-get/tree/master)

#### Usage:
```
var env = require('env-get');

// PORT not set
var port = env.get('PORT', 4000);
console.log(port); // 4000

// TOKEN not set
var token = env.get('TOKEN'); // throws Error 

// HOSTNAME set
var hostname = env.get('HOSTNAME'); 
console.log(hostname); // blaing.io
```

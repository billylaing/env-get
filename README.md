# env-get

Simple utility to get environment variables with an optional default.  
Throws an error if the variable is not found and no default is supplied.

This utility was designed to support twelve-factor applications and the strict separation of code and config. 
[Read more about it here.](https://12factor.net/config)

[![CircleCI](https://circleci.com/gh/billylaing/env-get/tree/master.svg?style=svg)](https://circleci.com/gh/billylaing/env-get/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/billylaing/env-get/badge.svg)](https://coveralls.io/github/billylaing/env-get)

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

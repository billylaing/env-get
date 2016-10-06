# env-get

Simple utility to get environment variables with an optional default.  
Throws an error if the variable is not found and no default is supplied.

This utility was designed to support twelve-factor applications and the strict separation of code and config.
 
[Read more about it here.][12-factor-config-url]

[![NPM Version][npm-image]][npm-url]
[![NPM Monthly][downloads-month-image]][npm-url]
[![Test Status][test-image]][test-url]
[![Coverage Status][coverage-image]][coverage-url]

#### Usage:
```javascript
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
[12-factor-config-url]:https://12factor.net/config
[npm-url]: https://npmjs.org/package/env-get
[test-url]: https://circleci.com/gh/billylaing/env-get/tree/master
[coverage-url]: https://coveralls.io/github/billylaing/env-get

[npm-image]: https://img.shields.io/npm/v/env-get.svg
[downloads-month-image]: https://img.shields.io/npm/dm/env-get.svg
[test-image]: https://img.shields.io/circleci/project/billylaing/env-get.svg?label=tests
[coverage-image]: https://coveralls.io/repos/github/billylaing/env-get/badge.svg

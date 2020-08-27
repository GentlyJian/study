'use strict';

var url = require('url');
// 会将url转换成对象
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'))
// protocol: 'http:',
// slashes: true,
// auth: 'user:pass',
// host: 'host.com:8080',
// port: '8080',
// hostname: 'host.com',
// hash: '#hash',
// search: '?query=string',
// query: 'query=string',
// pathname: '/path/to/file',
// path: '/path/to/file?query=string',
// href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash'
// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash').pathname)
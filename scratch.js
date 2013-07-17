#!/usr/bin/env node
var fs = require('fs');
var indexbuf = fs.readFileSync('index.html');
  console.log(indexbuf.toString());
var index = indexbuf.toString();
  console.log(index);

//buf = new Buffer(256);
//len = buf.write('\u00bd + \u00bc = \u00be', 0);
//console.log(len + " bytes: " + buf.toString('utf8', 0, len));
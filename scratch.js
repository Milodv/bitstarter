var sys = require('util');
var rest = require('restler');
var fs = require('fs');

var url = 'http://localhost:5000/'

var getUrl = function (url) {
   //         console.log('in de geturl');
               htmlfile = "url.html";
//  fs.writeFileSync(htmlfile, '1');
rest.get(url).on('complete', function(result){
 if (result instanceof Error) {
    sys.puts('Error: ' + result.message);
    this.retry(5000); // try again after 5 sec
  } else {
//    sys.puts(result);
//       console.log('in elsje');
   htmlfile = "url.html";
  fs.writeFileSync(htmlfile, result);
  }
})};

getUrl(url);
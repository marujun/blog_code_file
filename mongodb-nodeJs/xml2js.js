var WikiProvider = require('./wikiProvider.js').wikiProvider;
var wikiProvider = new WikiProvider;

var fs = require("fs");
var xml2js = require('xml2js');

var parser = new xml2js.Parser({explicitArray:false});


fs.readFile("../public/test.xml",  function(err, data) {
    parser.parseString(data, function (err, result) {
        if(err){console.log('convert error :  ',err)}else{console.log("convert success!")}
        console.log(JSON.stringify(result));
    });
});


wikiProvider.count({}, function (err, count) {
    console.log('wiki文档中共查询到' + count + '条记录');
});
console.time('计时器3');
wikiProvider.find({},{limit:1,skip:10,sort:[['title',1]]}, function (err, result) {
    console.timeEnd('计时器3');
    console.log('wiki文档中查询到的记录:',result);
});
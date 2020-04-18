const cheerio = require('cheerio')
const request = require('request')
// var http = require('http');
// var fs = require("fs");

// http.createServer(function(request, response) {
//     fs.readFile("index.html", function(err, data){
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(data);
//         response.end();
//       });
// }).listen(3000);


for(let i=0; i<=114; i++){
request(`https://www.leafly.com/strains?sort=name&page=${i}`, (error, response, html) => {
    if (!error && response.statusCode === 200){
        const $ = cheerio.load(html)
    $('.strain-playlist-grid').find('a').each((i, el) => {
        const strain = $(el)
        .find('div')
        .text()

        const trait = $(el)
        .find('span')
        .text()

        return {strain, trait}
    })
}
})
}



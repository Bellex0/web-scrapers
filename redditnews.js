const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const writeStream = fs.createWriteStream('redditnews.json')

let data = {}
for (let i=0; i<5; i++){
request('https://www.reddit.com/r/news/', (error, response, html) => {
        if (!error && response.statusCode === 200){
            const $ = cheerio.load(html)
        
        $('article').each((i, el) => {
            // $('.row.results-container').find('mat-card').each((i, el) => {
                const title = $(el)
                .find('h3')
                .text()

                const link = $(el)
                .find('a')
                .attr('href')

                // let data = {title, link}
                // console.log(title, link)
                data.title = title
                data.link = link


                writeStream.write(JSON.stringify(data))
        })
    }
})
}
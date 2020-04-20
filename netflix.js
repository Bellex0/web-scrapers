const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const writeStream = fs.createWriteStream('redditnews.json')

request('https://www.digitaltrends.com/movies/best-movies-on-netflix/', (error, response, html) => {
        if (!error && response.statusCode === 200){
            const $ = cheerio.load(html)
            
                $('#dt-post-content').each((i, el) => {
                    const title = $(el)
                    .find('h2')
                    .text()
                    
                    // const link = $(el)
                    // .find('a')
                    // .attr('href')
                    
                    // let data = {title, link}
                    console.log(title)
                // let data = {}
                // data.title = title
                // data.link = link
                })

                // writeStream.write(JSON.stringify(data))
        }
    })
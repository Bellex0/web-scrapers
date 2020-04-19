const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const writeStream = fs.createWriteStream('posts.csv')

// for(let i=0; i<=10; i++){
    request('https://www.reddit.com/r/ProgrammerHumor/', (error, response, html) => {
        if (!error && response.statusCode === 200){
            const $ = cheerio.load(html)
        
        $('#t3_g3v0cj').find('div._1poyrkZ7g36PawDueRza-J._11R7M_VOgKO1RJyRSRErT3').each((i, el) => {
            // $('.row.results-container').find('mat-card').each((i, el) => {
                const image = $(el)
                .find('img')
                .attr('src')
            
                // const strain = $(el)
                // .find('.name.disp-title')
                // .text()
                
                // const type = $(el)
                // .find('p.tag')
                // .text()
                
                // const content = $(el)
                // .find('p.desc')
                // .text()
                
                console.log(image)
            })
        }
        })
                    
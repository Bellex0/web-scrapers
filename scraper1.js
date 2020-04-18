const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const writeStream = fs.createWriteStream('strains.csv')

//Write Headers
writeStream.write(`Strain, Type, Content \n` )


// const scrape = function(){
for(let i=0; i<=94; i++){
request(`https://www.wikileaf.com/strains/?page=${i}`, (error, response, html) => {
    if (!error && response.statusCode === 200){
        const $ = cheerio.load(html)
    
    // $('.container.strains-list').each((i, el) => {
        $('.row.results-container').find('mat-card').each((i, el) => {
        const strain = $(el)
        .find('.name.disp-title')
        .text()

        const type = $(el)
        .find('p.tag')
        .text()

        const content = $(el)
        .find('p.desc')
        .text()

        // Write Row to CSV

        writeStream.write(`${strain}, ${type}, ${content} \n`)
    //    console.log(strain, type, content)
    })
}
})
}








 





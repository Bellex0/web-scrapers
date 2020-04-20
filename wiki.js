const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')

const writeStream = fs.createWriteStream('strains.json')


// Write Headers
// writeStream.write(`Strain, Type, Content \n` )


// const scrape = function(){
for(let i=0; i<=94; i++){
    let data = {}
request(`https://www.wikileaf.com/strains/?page=${i}`, (error, response, html) => {
    if (!error && response.statusCode === 200){
        const $ = cheerio.load(html)
    
    $('.container.strains-list').find('mat-card').each((i, el) => {
        // $('.row.results-container').find('mat-card').each((i, el) => {
            // const image = $(el)
            // .find('div[class="img-wrapper"] > img[class="mat-card-image"]')

            // // .find('div.img-wrapper')
            // .attr('src')

           
            const strain = $(el)
            .find('.name.disp-title')
            .text()
            
            const type = $(el)
            .find('p.tag')
            .text()
            
            const content = $(el)
            .find('p.desc')
            .text()

            data.strain = strain
            data.type = type
            data.content = content
            
            
            // Write Row to CSV
            
            // writeStream.write(`${strain}, ${type}, ${content} \n`)
            // writeStream.write(JSON.stringify({strain:data.strain,type: data.type, content: data.content }))
            writeStream.write(JSON.stringify(data))

            // fs.writeFile("./strains.json", JSON.stringify(data),)
            // console.log()
            //    console.log(strain, type, content)
        })
        
                                // fs.writeFile("./strains.json", JSON.stringify(data), (err) => {
                                //     if (err) {
                                //         console.error(err);
                                //         return;
                                //     };
                                //     console.log("File has been created");
                                // })
}
})
}
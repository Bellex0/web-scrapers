const cheerio = require('cheerio')
const request = require('request')

request('https://www.wikileaf.com/strains/', (error, response, html) => {
    if (!error && response.statusCode === 200){
        const $ = cheerio.load(html)
    
    // $('.container.strains-list').each((i, el) => {
        $('.row.results-container').find('mat-card').each((i, el) => {
        const strain = $(el)
        .find('.name.disp-title')
        .text()

        const type = $(el)
        .find('p')
        .text()

        console.log(strain, type)
    })
}
})

// request('https://www.leafly.com/strains?sort=name', (error, response, html) => {
//     if (!error && response.statusCode === 200){
//         const $ = cheerio.load(html)
//     $('.strain-playlist-grid').each((i, el) => {
//         const strain = $(el.div)
//         // .find("strain-tile__name")
//         .text()

//         console.log(strain)
//     })
// }
// })


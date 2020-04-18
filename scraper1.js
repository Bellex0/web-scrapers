const cheerio = require('cheerio')
const request = require('request')


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

        console.log(strain, type, content)
    })
}
})
}

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


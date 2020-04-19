const cheerio = require ('cheerio')
const request = require ('request')

    var numTrump = 0
    var numBiden = 0

async function getName() {
    let nameArr=[]
    for (i=1; i <= 2; i++){
        await request(`https://www.politico.com/news/2020-elections/${i}`, (error, response, html) => {
            if (!error && response.statusCode === 200){
                const $ = cheerio.load(html)

            $('.content.layout-bi-unequal').each((i, el) => {

                const name = $(el)
                .find('h1')
                .text()

                // return name

                console.log(name)
                // if (name.includes('Trump')){
                //         numTrump++
                //         }
                //         else if (name.includes('Biden')){
                //                   numBiden++
                //                  }
                //                  else {
                //                      null
                //                  }

                // nameArr.push(name)
                // console.log(nameArr)
                
                // return `${name}`
        })
        }
    })
} 
// return nameArr
// console.log(nameArr)
// return numTrump, numBiden
}

console.log(getName())

// function count (){
//     // getName()

    
//     if (getName().includes('Trump')){
//         numTrump++
//     }
//     else if (getName().includes('Biden')){
//                 numBiden++
//             }
//             else {
//                 null
//             }
//  console.log(results)
 
//     var numTrump = 0
// var numBiden = 0

//     if (results.includes('Trump')){
//         numTrump++
//     } 
//     else if (results.includes('Biden')){
//         numBiden++
//     }
//     else {
//         null
//     }

// }

// count()
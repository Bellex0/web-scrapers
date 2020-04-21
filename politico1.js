const cheerio = require ('cheerio')
const request = require ('request')
// const jsonfile = require ('jsonfile')
const fs = require('fs')
const writeStream = fs.createWriteStream('newpolitico.json')


    var numTrump = 0
    var numBiden = 0

    
    const getName = async () => {
        let nameArr=[]
        for (i=1; i <= 10; i++){
            await request(`https://www.politico.com/news/2020-elections/${i}`, (error, response, html) =>{
                if (!error && response.statusCode === 200){
                    const $ = cheerio.load(html)
                    var arr = []
                    $('.content.layout-bi-unequal').each((i, el) => {
                        const name = $('.category').next().text().trim().replace(/\n/g, ", ")
                        
                        // console.log()
                        // writeStream.write(JSON.stringify(data))
                        //  var full = name+","
                        //  nameArr.push(full)

                        // const name = $(el)
                        //  .find('h1')
                        // console.log(arr)
                        
                        let data = {}

                        data.title = name
                        writeStream.write(JSON.stringify(data, null, 4))
                        // console.log(data)
                        // console.log(arr)
                        
                        // return data
                    //     for (var i = 0; i < nameArr.length; i++) {
                    //         arr[i] = {
                    //        title: name
                    //      };
                    //     }
                    //     // console.log(arr, nameArr)
                    })
                    // console.log(data)
                    // return arr
                    
                }
                // console.log(data)
        })   
        
            // console.log(results)
            // return results
            
        
        }
    // }
      
}          
getName()

// fs.readFile('./newpolitico.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })
// }

// getFile()
  
            
   

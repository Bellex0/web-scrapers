const cheerio = require ('cheerio')
const request = require ('request')
const jsonfile = require ('jsonfile')

    var numTrump = 0
    var numBiden = 0

    
    const getName = async() => {
    //     let nameArr=[]
        for (i=1; i <= 10; i++){
           await request(`https://www.politico.com/news/2020-elections/${i}`, (error, response, html) =>{
                if (!error && response.statusCode === 200){
                    const $ = cheerio.load(html)

                    // $('.content.layout-bi-unequal').each((i, el) => {
                        const name = $('h1 > a').text().replace(/\n/g, ' ')


                        // const name = $(el)
                        //  .find('h1')
                        
                        
                        let data = {}

                        data.title = name
                        
                        return data
                    }
                    
                   
           })      
        
            // console.log(results)
            // return results
            
        
        }
    // }
      
}          
console.log(getName())
            
   

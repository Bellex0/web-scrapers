const puppeteer = require('puppeteer')
var fs = require("fs");

// async function scrapeProduct() {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.politico.com/news/2020-elections/1')

//     const[el] = await page.$x('//*[@id="main"]/div[2]/div/div/section[1]/div[2]/ol/li[1]/article/div/div/div/div/header/h1/a');
//     const text = await el.getProperty('textContent');
//     const title = await text.jsonValue();

//     // const[el2] = await page.$x('//*[@id="main-image"]');
//     // const src1 = await el.getProperty('txt');
//     // const newTxt = await src1.jsonValue();

//     // for(var i =1, i<)

//     console.log({title});

//     browser.close();

// }
// scrapeProduct()

// async function getTitles() {
//     try {
//       // open the headless browser
//       var browser = await puppeteer.launch({ headless: true });
//       // open a new page
//       var page = await browser.newPage();
//       // enter url in page
//       for(i=1; i<=10; i++){
//       await page.goto(`https://www.politico.com/news/2020-elections/${i}`);
//       await page.waitForSelector("h1 > a");
  
//       var news = await page.evaluate(() => {
//         var titleNodeList = document.querySelectorAll('h1 > a');
//         var titleLinkArray = [];
//         for (var i = 0; i < titleNodeList.length; i++) {
//           titleLinkArray[i] = {
//             title: titleNodeList[i].innerText.trim()
//         };
//         }
//         console.log(titleLinkArray)
//         return titleLinkArray;
//       })
//     }
//       await browser.close();
//       // Writing the news inside a json file
//     //   fs.writeFile("politico.json", JSON.stringify(news), function(err) {
//     //     if (err) throw err;
//     //     console.log("Saved!");
//     //   });
//       console.log("Browser Closed");
//     } catch (err) {
//       // Catch and display errors
//       console.log(err);
//       await browser.close();
//       console.log("Browser Closed");
//     }
//   };

// console.log(getTitles())

let scrape = async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    for(i=1; i<=10; i++){
    await page.goto(`https://www.politico.com/news/2020-elections/${i}`)
    await page.waitForSelector('h1')

    const result = await page.evaluate(() => {
        let titleList = document.querySelectorAll('h1');
        var titleArray = [];
        titleArray.push(titleList)
        
        //       })
        // console.log(titleArray)
        // return titleArray;
        return titleArray;
    });
}
browser.close();
return result;


};

scrape().then((value) => {
    console.log(value); // Success!
});
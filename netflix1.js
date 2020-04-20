const puppeteer = require('puppeteer')
const fs = require('fs')

async function scrape (url) {
const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)
    // await page.waitForSelector('h2')
    

    var movies = await page.evaluate(() => {
        var titlesList = document.querySelectorAll('h2');
        // var sumList = document.querySelectorAll('h2').nextElementSibling
        var movieArr = [];
        for (var i = 0; i < titlesList.length; i++) {
          movieArr[i] = {
            title: titlesList[i].innerText.trim(),
            summary: titlesList[i].nextElementSibling.innerText.trim(),
            // moreInfo: titleList[i].nextElementSibling.nextElementSibling.nextElementSibling.innerText.replace(/\n/g, ' ').trim()
          };
        }
        return movieArr;
      })
      fs.writeFile("./netflix.json", JSON.stringify(movies, null, 3),  (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("Great Success");
    });
    //   console.log(movies);
    
    // const txt = span.getProperty('textContent')
    // const name = txt.jsonValue()

// console.log({newList})
browser.close()

}

scrape("https://www.digitaltrends.com/movies/best-movies-on-netflix/")
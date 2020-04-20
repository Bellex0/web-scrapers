const puppeteer = require('puppeteer')
const fs = require('fs')

async function scrape (url) {
const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url)
    await page.waitForSelector('#dt-post-content')
    

    var movies = await page.evaluate(() => {
        var titleList = document.querySelectorAll('h2');
        // var sumList = document.querySelectorAll('h2').nextElementSibling
        var titleListArray = [];
        for (var i = 0; i < titleList.length; i++) {
          titleListArray[i] = {
            title: titleList[i].innerText.trim(),
            summary: titleList[i].nextElementSibling.innerText.trim(),
            moreInfo: titleList[i].nextElementSibling.nextElementSibling.nextElementSibling.innerText.replace(/\n/g, ' ').trim()
          };
        }
        return titleListArray;
      })
      fs.writeFile("./netflix.json", JSON.stringify(movies), (err) => {
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
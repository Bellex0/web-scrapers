const puppeteer = require('puppeteer')

async function scrape (url) {
const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto(url)
    // await page.waitForSelector("div[data-comp='ContentStoreBody ']")

    // await page.evaluate(() => {
    //     let list = document.querySelectorAll("div[data-comp='ProductDisplayName '] > span[data-at='sku_item_brand']");
    //     console.log(list)
        // var arr = []
        // for (var i =0; i<arr.length; i++){

        //     arr[i] = {
        //         name:list[i].innerText
        //     }
        // }
        // return arr
    // });
// console.log(result)
// browser.close();
// return result;
const wholeBox = await page.$x('/html/body/div[3]/div[5]/div/div/main/div/div/div/div[1]/div')
let newList = wholeBox.forEach(el => {
    const span = el.$x('/html/body/div[3]/div[5]/div/div/main/div/div/div/div[1]/div/div[2]/div[3]/a/div/div[3]/span[1]')
    console.log(span)
    // const txt = span.getProperty('textContent')
    // const name = txt.jsonValue()

})


// console.log({newList})
browser.close()

}

scrape("https://www.sephora.com/beauty/best-selling-makeup")
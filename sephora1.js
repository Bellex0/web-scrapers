const puppeteer = require('puppeteer')

let scrape = async () => {
const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto("https://www.sephora.com/beauty/best-selling-makeup")
    await page.waitForSelector("div[data-comp='ContentStoreBody ']")

    await page.evaluate(() => {
        let list = document.querySelectorAll("div[data-comp='ProductDisplayName '] > span[data-at='sku_item_brand']");
        console.log(list)
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
})
}

scrape()
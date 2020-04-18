const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    const[el] = await page.$x('//*[@id="__next"]/div[2]/div[3]/a[1]/div');
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();

    // const[el2] = await page.$x('//*[@id="main-image"]');
    // const src1 = await el.getProperty('txt');
    // const newTxt = await src1.jsonValue();

    

    console.log({rawTxt});

    browser.close();

}

scrapeProduct('https://www.leafly.com/strains?sort=name')

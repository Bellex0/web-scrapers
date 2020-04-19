const puppeteer = require('puppeteer')

async function scrapeProduct() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.wikileaf.com/strains/?page=1')

    // const[el] = await page.$x('//*[@id="main-content"]/pages-strains/div[2]/div/div[2]/div[2]/div[2]/div/div/div[3]/shared-strain-card/shared-card/mat-card/div/img[2]');
    await page.$x('//*[@id="main-content"]/pages-strains/div[2]/div/div[2]').forEach((i, el) => {
        const[el] = el.
    }
    const src = await el.getProperty('src');
    const srcURL = await src.jsonValue();

    // const[el2] = await page.$x('//*[@id="main-image"]');
    // const src1 = await el.getProperty('txt');
    // const newTxt = await src1.jsonValue();

    for(var i =1, i<)

    console.log({srcURL});

    browser.close();

}
scrapeProduct()

// scrapeProduct('https://www.leafly.com/strains?sort=name')

// scrapeProduct('https://www.leafly.com/strains?sort=name')

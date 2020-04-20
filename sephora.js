const cheerio = require('cheerio')
const request = require('request')

request('https://www.sephora.com/beauty/best-selling-makeup', (error, response, html) => {
    if (!error && response.statusCode === 200){
        const $ = cheerio.load(html)

    //    $("div[data-comp='ProductDisplayName ']").each((i, el) => {

        const image = $("div[data-comp='ProductDisplayName '] > span[data-at='sku_item_brand']")
        // .find("span[data-at='sku_item_brand']")
        .text()

        console.log(image)
    //    })
    //    <div class="css-1yrvdem"><div class="css-zzd09e " data-comp="ProductImage Box "><div class="css-1dn9kin"></div><img src="/productimages/sku/s1925577-main-zoom.jpg?imwidth=135" srcset="/productimages/sku/s1925577-main-zoom.jpg?imwidth=202.5 1.5x, /productimages/sku/s1925577-main-zoom.jpg?imwidth=270 2x" alt="FENTY BEAUTY by Rihanna Match Stix Matte Skinstick" class="css-j3e40p " data-comp="Image Box "></div><button class="css-1g0g0sz" type="button" aria-label="More info on FENTY BEAUTY by Rihanna Match Stix Matte Skinstick" data-comp="ProductQuicklook ">Quick Look</button><div class="css-1ifgyzz" style="opacity: 0;"><button class="css-3x6bwe" aria-label="Sign in to love FENTY BEAUTY by Rihanna Match Stix Matte Skinstick" data-at="unloved" data-comp="ProductLoveToggle "><svg viewBox="0 0 24 24" aria-hidden="true" class="css-1x18rn8 " data-comp="IconLove Icon Box "><path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"></path></svg></button></div></div>
    // })
}
})
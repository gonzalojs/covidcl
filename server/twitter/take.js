const puppeteer = require('puppeteer')

const take = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.twitch.tv/', {
    waitUntil: 'networkidle2'
  })
  await page.screenshot({
    path: 'server/twitter/screenshots/data.png'
  })

  await browser.close();
}

module.exports = take
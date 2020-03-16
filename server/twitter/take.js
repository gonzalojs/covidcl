const puppeteer = require('puppeteer')

const take = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.indiehackers.com/', {
    waitUntil: 'networkidle2',
    timeout: 0
  })
  await page.screenshot({
    path: 'server/twitter/screenshots/data.png',
    fullPage: true
  })

  await browser.close();
}

module.exports = take
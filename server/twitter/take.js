const puppeteer = require('puppeteer')

const take = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({
    width: 1920,
    height: 1080
  })
  await page.goto('http://localhost:3000/', {
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

const fetch = require('node-fetch')

const tracker = (params) => {
  console.log(data_total)
  fetch('https://thevirustracker.com/free-api?countryTotal=CL')
    .then(response => response.json())
    .then(json => {
      datas = {
        total_cases: json.countrydata[0].total_cases,
        total_recovered: json.countrydata[0].total_recovered,
        total_deaths: json.countrydata[0].total_deaths,
        total_new_cases_today: json.countrydata[0].total_new_cases_today,
        total_new_deaths_today: json.countrydata[0].total_new_deaths_today,
        total_active_cases: json.countrydata[0].total_active_cases,
        total_serious_cases: json.countrydata[0].total_serious_cases
      }
      data_total = datas
    })
}

module.exports = tracker
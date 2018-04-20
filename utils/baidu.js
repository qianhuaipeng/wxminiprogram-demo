const URI = 'https://api.map.baidu.com'
const fetch = require('./fetch.js')

function fetchtApi(type, params) {
  return fetch(URI, type, params)
}

function getCityName(latitude = 39.90403, longitude = 116.407526) {
  console.log(`${latitude},${longitude}`);
  const params = { location: `${latitude},${longitude}`, output: 'json', ak: 'B61195334f65b9e4d02ae75d24fa2c53'}
  return fetchtApi('geocoder/v2/', params).then(res => res.data.result.addressComponent.city)
}

module.exports = { getCityName }
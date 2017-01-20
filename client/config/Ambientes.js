// const IS_LOCAL = process.env.NODE_ENV !== 'production'
const IS_LOCAL = false
const FULL_URL = window.location.protocol + '//' + window.location.host

const API_BASE_URL = IS_LOCAL
  ? 'http://api.domain.dev' // url de dev
  : 'http://api.domain.com' // url de prod

export {
  IS_LOCAL,
  FULL_URL
}

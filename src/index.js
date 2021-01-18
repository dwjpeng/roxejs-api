const api = require('./api/v1')
const apiGen = require('./apigen')
const processArgs = require('./process-args')

const RoxeApi = function(config) {
  return apiGen('v1', api, config)
}

Object.assign(
  RoxeApi,
  {
    processArgs,
    api,

    /** @deprecated */
    Testnet: function (config) {
      console.error('deprecated, change RoxeApi.Testnet(..) to just RoxeApi(..)')
      return RoxeApi(config)
    },

    /** @deprecated */
    Localnet: function (config) {
      console.error('deprecated, change RoxeApi.Localnet(..) to just RoxeApi(..)')
      return RoxeApi(config)
    }
  }
)

module.exports = RoxeApi

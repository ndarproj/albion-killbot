const humps = require("humps")

module.exports = function(object) {
    return humps.camelizeKeys(object)
}

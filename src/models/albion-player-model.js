const mongoose = require('mongoose');
const camelizeMiddleware = require('../middleware/camelize-middleware');

const Schema = mongoose.Schema;
const playerSchema = new Schema({}, {timestamps: true, strict: false})

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
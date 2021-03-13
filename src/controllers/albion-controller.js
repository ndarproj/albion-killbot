const ALBION_API_URL = "https://gameinfo.albiononline.com/api/gameinfo";
const axios = require("axios");
const _ = require("lodash");
const Player = require("../models").Player;
const camelize = require("../helpers/camelize-keys");

options = { upsert: true, new: true, setDefaultsOnInsert: true };
module.exports = {
  //queue
  async getPlayerBasicInfo(ctx) {
    try {
      const ign = ctx.query.q;

      const response = await axios.get(ALBION_API_URL + "/search?q=" + ign);

      let player = _.find(
        response.data.players,
        (player) => player.Name === ign
      );

      if (!player) {
        ctx.throw(404, "Player not Found!");
      }

      player = camelize(player);

      //TODO: doc returning different result
      await Player.findOneAndUpdate({ id: player.id }, player, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      });

      ctx.body = "Player: " + player.name + " verified!";
    } catch (error) {
      throw error;
    }
  },
};

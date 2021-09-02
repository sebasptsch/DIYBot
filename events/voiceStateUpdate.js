const { Client, Collection, Intents } = require("discord.js");

module.exports = {
  name: "voiceStateUpdate",
  once: false,
  execute(oldState, newState) {
    console.log(oldState, newState);
  },
};

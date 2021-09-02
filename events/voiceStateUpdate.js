const { Client, Collection, Intents } = require("discord.js");
const { getGuildConfig } = require("../utils");

module.exports = {
  name: "voiceStateUpdate",
  once: false,
  execute(oldState, newState) {
    console.log(newState.channelId, newState.guild.id);
    let guildConfig = getGuildConfig(newState.guild.id);
    if (!guildConfig.voice_channels[`${newState.channelId}`] || !guildConfig)
      return;
    console.log(guildConfig);
  },
};

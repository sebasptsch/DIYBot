const { Client, Collection, Intents } = require("discord.js");
const { getGuildConfig, writeGuildConfig } = require("../utils");

module.exports = {
  name: "voiceStateUpdate",
  once: false,
  execute(oldState, newState) {
    if (oldState.channelId && newState.channelId) return; // Ignore Anything that isn't a channel change.
    let guildConfig = getGuildConfig(newState.guild.id);
    if (!guildConfig.voice_channels[`${newState.channelId}`]) return;

    if (oldState.channelId) {
      // Leave
      console.log("Leave");
      guildConfig.voice_channels[`${newState.channelId}`].lastActivity =
        Date.now();
      writeGuildConfig(newState.guild.id, guildConfig);
    } else if (newState.channelId) {
      // Join
      console.log("Join");
      // console.log(newState);
      newState.guild.channels
        .create("New Secondary Session", {
          reason: `Called by Channel Bot with main channel ${newState.channelId}`,
          type: "GUILD_VOICE",
        })
        .then((channel) => {
          guildConfig.voice_channels[`${newState.channelId}`].secondaries[
            channel.id
          ] = {
            enabled: true,
          };
          guildConfig.voice_channels[`${newState.channelId}`].lastActivity =
            Date.now();
          writeGuildConfig(newState.guild.id, guildConfig);
          // console.log(guildConfig.voice_channels[`${newState.channelId}`]);
        });
    }
  },
};

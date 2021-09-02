const { writeGuildConfig, getGuildConfig } = require("../utils");

module.exports = {
  name: "channelDelete",
  once: false,
  execute(channel) {
    let guildConfig = getGuildConfig(channel.guild.id);
    if (!guildConfig.voice_channels[`${channel.id}`] || !guildConfig) return;
    console.log(`deleted ${channel.id}`);
    delete guildConfig.voice_channels[`${channel.id}`];
    writeGuildConfig(channel.guild.id, guildConfig);
  },
};

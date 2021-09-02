const { SlashCommandBuilder } = require("@discordjs/builders");
// const client = require("..");
const { getGuildConfig, writeGuildConfig } = require("../utils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("create")
    .setDescription("Creates a new main channel."),
  async execute(interaction) {
    let guildConfig = new Object(getGuildConfig(interaction.guild.id));
    interaction.guild.channels
      .create("New Session", {
        reason: "Called by Channel Bot",
        type: "GUILD_VOICE",
      })
      .then((channel) => {
        guildConfig.voice_channels[`${channel.id}`] = {
          enabled: true,
          secondaries: {},
          lastActivity: Date.now(),
        };
        writeGuildConfig(interaction.guild.id, guildConfig);
      });
    // TODO: Use objects instead of arrays for storage

    return interaction.reply(`test`);
  },
};

const { SlashCommandBuilder } = require("@discordjs/builders");
const client = require("..");
const { getGuildConfig, writeGuildConfig } = require("../utils");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("create")
    .setDescription("Creates a new main channel."),
  async execute(interaction) {
    let guildConfig = getGuildConfig(interaction.guild.id);
    interaction.guild.channels
      .create("New Session", {
        reason: "Called by Channel Bot",
      })
      .then((channel) => {
        guildConfig.voice_channels.push({
          id: channel.id,
        });
        writeGuildConfig(interaction.guild.id, guildConfig);
      });
    // TODO: Use objects instead of arrays for storage

    return interaction.reply(`${JSON.stringify(guildConfig)}`);
  },
};

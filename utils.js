const fs = require("fs");

/**
 * Get's a guild's config file
 * @param {number} guildId
 * @returns {Object}
 */
function getGuildConfig(guildId) {
  let file = fs.readFileSync(`./guilds/${guildId}.json`, "utf-8");
  let config = JSON.parse(file);
  return config;
}

function writeGuildConfig(guildId, config) {
  fs.writeFileSync(
    `./guilds/${guildId}.json`,
    JSON.stringify(config, undefined, 2)
  );
}

module.exports = {
  getGuildConfig,
  writeGuildConfig,
};

const fs = require("fs");

/**
 * Get's a guild's config file.
 * @param {number} guildId
 * @returns {Object}
 */
function getGuildConfig(guildId) {
  if (!fs.existsSync(`./guilds/${guildId}.json`)) return undefined;
  let file = fs.readFileSync(`./guilds/${guildId}.json`, "utf-8");
  let config = JSON.parse(file);
  return config;
}

/**
 * Write to a guild's config file.
 * @param {number} guildId
 * @param {*} config
 */
function writeGuildConfig(guildId, config) {
  fs.writeFileSync(
    `./guilds/${guildId}.json`,
    JSON.stringify(config, undefined, 2)
  );
}

/**
 * Log
 * @param {"debug" || "info" || "error" || "warning"} logLevel
 * @param {number} logChannel
 * @param {string} logMessage
 */
function debugLog(logLevel, logChannel, logMessage) {}

module.exports = {
  getGuildConfig,
  writeGuildConfig,
};

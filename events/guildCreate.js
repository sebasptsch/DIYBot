const fs = require("fs");
module.exports = {
  name: "guildCreate",
  once: false,
  execute(guild) {
    if (!fs.existsSync(`./guilds/${guild.id}.json`)) {
      fs.writeFileSync(
        `./guilds/${guild.id}.json`,
        fs.readFileSync("./guilds/default.json")
      );
    }
  },
};

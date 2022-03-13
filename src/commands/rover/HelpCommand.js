const Command = require("../Command")

module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rolinkhelp",
      properName: "RoLink",
      aliases: ["rolink"],
      description: "Displays a description of RoLink",
    })
  }

  async fn(msg) {
    const output = `Welcome to RoLink, a bot that makes integrating your server with Roblox easy. You can run \`${msg.guild.commandPrefix}help\` to see a list of commands.`

    msg.reply(output)
  }
}

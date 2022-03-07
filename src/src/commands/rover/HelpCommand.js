const Command = require("../Command")

module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: "RoLinkhelp",
      properName: "RoLink",
      aliases: ["RoLink"],
      description: "Displays a description of RoLink",
    })
  }

  async fn(msg) {
    const output = `Welcome to RoLink, a bot that makes integrating your server with Roblox easy. If you need help, you can join our support server by using the \`${msg.guild.commandPrefix}support\` command. You can run \`${msg.guild.commandPrefix}help\` to see a list of commands. For instructions, please see the README at https://github.com/evaera/RoLink/blob/master/README.md.`

    msg.reply(output)
  }
}

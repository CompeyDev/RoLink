const Command = require("../Command")
const config = require("../../data/client.json")

module.exports = class InviteCommand extends Command {
  constructor(client) {
    super(client, {
      name: "invite",
      properName: "Invite",
      aliases: ["rolinkinvite"],
      description: "Sends the user an invite link to invite RoLink.",
      userPermissions: [],
    })
  }

  async fn(msg) {
    msg.author
      .send(`RoLink is a closed bot is only available to a select few.`)
      .then(() => {
        msg.reply("Sent you a DM with information.")
      })
      .catch(() => {
        msg.reply(
          "I can't seem to message you - please make sure your DMs are enabled!",
        )
      })
  }
}

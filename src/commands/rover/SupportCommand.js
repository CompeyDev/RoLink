const Command = require("../Command")

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: "support",
      properName: "Support",
      aliases: ["server"],
      userPermissions: [],
      description:
        "Posts an invite link to the Official RoLink Discord where you can easily get help.",
    })
  }

  async fn(msg) {
    msg.author
      .send(
        "Here's information about the bot.",
      )
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

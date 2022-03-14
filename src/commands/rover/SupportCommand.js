const Command = require("../Command")

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: "support",
      properName: "Support",
      aliases: ["server"],
      userPermissions: [],
      description:
        "haha no support xd xd",
    })
  }

  async fn(msg) {
    msg.author
      .send(
        "ecks dee cry about it no support",
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

const Command = require("../Command")

module.exports = class UnverifyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "unverify",
      properName: "Unverify",
      description: "Displays instructions on how to unverify",
      aliases: ["unlink"],
      userPermissions: [],
    })
  }

  async fn(msg) {
    msg.author
      .send(
        "This bot uses RoVer's registry so, to unverify, visit https://verify.devcomp.tk and click on **Remove**.",
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

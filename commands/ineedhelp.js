const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const embed = new Discord.MessageEmbed()
  .setTitle("Get help from the file creator's discord server and ask for help!")
  .setDescription("\n\n [Discord Link](https://discord.gg/ufdKrz7BUK)")
  message.channel.send({embeds:[embed]})
}

exports.name = "ineedhelp"
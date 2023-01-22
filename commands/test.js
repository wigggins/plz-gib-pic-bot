const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("test").setDescription("Test"),
  async execute(interaction) {
    interaction.reply("Test received");
  },
};

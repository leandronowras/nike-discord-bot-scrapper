const { SlashCommandBuilder } = require('@discordjs/builders');
// const { titleScrapper } = require('../../back-end/dist/src/index')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('titles')
		.setDescription('Replies the h1s of the current browser page'),
	async execute(interaction) {
    // const replyMessage = titleScrapper().join("\n")
		await interaction.reply('ola');
	},
};
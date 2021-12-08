const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs')
const path = require('path')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('arrivals')
		.setDescription('Replies the h1s of the current browser page'),
	async execute(interaction) {
    const arrivals = fs.readFileSync(path.resolve(__dirname, './../../data/nikeNewArrivals.json'))

		// So retorna os 5 primeiros
		const message = arrivals.toString().replaceAll(/{|}|"|\[|\]/gi, "")

		await interaction.reply(message.replaceAll("--,", "\n"));
	},
};
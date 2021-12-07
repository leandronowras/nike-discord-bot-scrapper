const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs')
const path = require('path')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('arrivals')
		.setDescription('Replies the h1s of the current browser page'),
	async execute(interaction) {
    const arrivals = fs.readFileSync(path.resolve(__dirname, './../../data/nikeNewArrivals.json'))

		await interaction.reply(arrivals.toString());
	},
};
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('init')
		.setDescription('Replies the user'),
	async execute(interaction) {
			await interaction.reply('implementar facade para verificar se o browser ta funcionando');
	},
};
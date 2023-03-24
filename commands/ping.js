const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('안녕')
		.setDescription('재미봇이 인사를 받아줍니다.'),
	async execute(interaction) {
		await interaction.reply('하세요!');
	},
};
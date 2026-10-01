import { InteractionCallback, SlashCommandBuilder } from 'discord.js'

export default {
    data: new SlashCommandBuilder().setName('ping').setDescription('Ping pong!'),
    execute: async function execute(interaction){
        await interaction.reply('pong')
    }
}
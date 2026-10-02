import { InteractionCallback, SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("exp-calc")
    .setDescription(
      "Calculate the amount of EXP needed to reach a certain level",
    )
    .addIntegerOption((option) =>
      option
        .setName("current-exp")
        .setDescription("Your current exp.")
        .setRequired(true),
    )
    .addIntegerOption((option) =>
      option
        .setName("goal-level")
        .setDescription("The level you wish to reach.")
        .setRequired(true),
    ),
  execute: async function execute(interaction) {

    const current = interaction.options.getInteger('current-exp')
    const goal = interaction.options.getInteger('goal-level')
    let goalEXP = 0;
					for (let simLevel = 1; simLevel < goal; simLevel++) {
						let needed = 5 * Math.pow(simLevel, 0.75) * simLevel;
							goalEXP += needed;

                        console.log(goalEXP)
					}


      let exp = current;
      let level = 0;
      let needed;
					for (let i = 0; i <= 27915; i++) {
						needed = 5 * Math.pow(level, 0.75) * level;
						if (exp >= needed) {
							exp -= needed;
							level++;
						}
					}

                    console.log(current)
                    console.log(goalEXP)
                    console.log(`goal level : ${goal}`)

    const progress = Math.round((current / goalEXP) * 10000) / 100;
    const progressTicks = Math.floor(progress / 10);
    let tickStr = "";

    for(let i = 0; i < 10; i++){
      if(i < progressTicks){
        tickStr = tickStr + "██"
      }else{
        tickStr = tickStr + "░░"
      }
    }

    const expEmbed = new EmbedBuilder()
    .setTitle(`Lvl ${level} ━━► Lvl ${goal}`)
    .setDescription(`<:star:1555437093575065630> **${Math.round(goalEXP - current).toLocaleString()}**  Remaining.
      
      ${tickStr} ${progress}%
      `)
    await interaction.reply({embeds: [expEmbed]});
  },
};

import { InteractionCallback, SlashCommandBuilder } from "discord.js";

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
                    console.log(current)
                    console.log(goalEXP)
                    console.log(`goal level : ${goal}`)
    await interaction.reply(`${goalEXP - current} exp left`);
  },
};

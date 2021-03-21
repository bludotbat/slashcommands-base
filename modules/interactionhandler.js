
module.exports = (client, commands) => { 
    var modules = {}

    modules.handle = async (interaction) => {
        await commands[interaction.data.name.toLowerCase()].cmd.runCommand(interaction)
    }

    return modules
}

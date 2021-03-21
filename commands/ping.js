module.exports = (client, helpers) => { 
    var modules = {}

    modules.runCommand = async (interaction) =>
    {
        helpers.slash.reply(interaction, "pong!")
    }

    return modules
}
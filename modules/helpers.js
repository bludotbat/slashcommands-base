
module.exports = (client, commandArray) => { 
    var modules = {}
    modules.slash = {}

    modules.getApp = (guildID) => {
        const app = client.api.applications(client.user.id)
        if(guildID)
        {
            app.guilds(guildID)
        }
        return app
    }

    modules.slash.reply = (interaction, responce) => {
        client.api.interactions(interaction.id, interaction.token).callback.post({
            data: {
                type: 4,
                data: {
                    content: responce
                }
            }
        })
    }

    modules.slash.create = async (guildID, name, desc) => {
        commandArray[name] = {}
        commandArray[name].cmd = require(`./../commands/${name}.js`)(client, modules)

        modules.getApp(guildID).commands.post({
            data: {
                name: name,
                description: desc,
            }
        })
    }

    return modules
}

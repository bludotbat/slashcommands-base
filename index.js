require('dotenv').config()

const DiscordJS = require('discord.js')
const client = new DiscordJS.Client()
const guildID = '823035262547656774'

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)
    const commands = await client.api.applications(client.user.id).guilds(guildID).commands.get()
    console.log(commands)

})

client.login(process.env.BOT_TOKEN)

require('dotenv').config()

const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const client = new DiscordJS.Client()

client.on('ready', async () => {
    const disabledDefaultCommands = [
        'help',
        'command',
        'language',
        'prefix',
        'requiredrole'
    ]

    new WOKCommands(client, {
        commandsDir: 'commands',
        testServers: [process.env.DEV_GUILD],
        showWarns: false,
        disabledDefaultCommands
    })

    console.log(`Logged in as ${client.user.tag}!`)
})

client.login(process.env.BOT_TOKEN)

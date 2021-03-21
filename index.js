require('dotenv').config()

const DiscordJS = require('discord.js')
const client = new DiscordJS.Client()
const guildID = '823035262547656774'
const commandArray = {}

const Helpers = require("./modules/helpers.js")(client, commandArray)
const InteractionHandler = require("./modules/interactionhandler.js")(client, commandArray)

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)
    
    Helpers.slash.create(guildID, "ping", "replys with pong")

    client.ws.on('INTERACTION_CREATE', InteractionHandler.handle)
    
    //const commands = await Helpers.getApp(guildID).commands.get()
    //console.log(commands)
})

client.login(process.env.BOT_TOKEN)

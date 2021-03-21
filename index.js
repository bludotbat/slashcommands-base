const DiscordJS = require('discord.js');
require('dotenv').config();

class DiscordBot {
    client = null;

    onReady()
    {
        console.log("Called");
        console.log(`client - > ${this.client}`)
        console.log(`Logged in as ${this.client.user.tag}!`);
    }

    onDebug(str)
    {
        //console.log(`[DBG] ${str}`);
    }

    LoadModules()
    {

    }

    InitCallbacks()
    {
        this.client.on('ready', this.onReady);
        this.client.on('debug', this.onDebug);
        console.log("Callbacks ready");
    }

    StartupBot()
    {
        this.client = new DiscordJS.Client();
        this.InitCallbacks();
        this.client.login(process.env.BOT_TOKEN);
        console.log("Logging in");
    }
}

discordBot = new DiscordBot();
discordBot.StartupBot();
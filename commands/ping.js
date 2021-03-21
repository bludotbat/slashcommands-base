module.exports = {
    slash: true,
    testOnly: true,
    description: "ping command",
    callback: async ({}) => {
        return "pong bro"
    }
}
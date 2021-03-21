module.exports = {
    slash: true,
    testOnly: true,
    description: "adds 2 numbers togetha",
    minArgs: 2,
    expectedArgs: '<Number 1> <Number 2>',
    callback: async ({args}) => {
        const [num1, num2] = args

        return `${num1} + ${num2} = ${Number(num1) + Number(num2)}`
    }
}
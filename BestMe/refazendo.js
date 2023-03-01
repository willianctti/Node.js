const perguntas = [
    "Qual é seu nome?",
    "O que você estudou hoje?",
    "O que te deixou aborrecido?",
    "Quantas pessoas você ajudou hoje?",
]

const perguntar = ( index = 0 ) => {
    return process.stdout.write(("\n" + perguntas[index] + " > "))
}

perguntar()

const respondendo = []
process.stdin.on("data", data => {
    respondendo.push(data.toString().trim())
    if(respondendo.length < perguntas.length) {
        perguntar(respondendo.length)
    } else {
        console.log(respondendo)
        process.exit()
    }
})
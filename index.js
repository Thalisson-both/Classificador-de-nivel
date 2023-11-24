let nome = "ola"
let xp = "10001"
let elo = ""

if (xp <= 1000){
    elo = 'Ferro'
} else if (xp <= 2000) {
    elo = 'Bronze'
} else if (xp <= 5000) {
    elo = 'Prata' 
} else if (xp <= 7000) {
    elo = 'Ouro'
} else if (xp <= 8000) {
    elo = 'Platina'
} else if (xp <= 9000) {
    elo = 'Ascendente'
} else if (xp <= 10000) {
    elo = 'Imortal'
} else {
    elo = "Radiante"
}

console.log(`O Heroi de nome ${nome} está no nivel de ${elo}`)
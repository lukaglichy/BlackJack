let alive = true
let blackjack = false

let deck = []

let sum = 0;
let message = ""

let black = document.getElementById("red")
let card = document.getElementById("cards")
let sumery = document.getElementById("sums")
let cash = document.getElementById("cash")

let player = {
    name: "CASH: ",
    money: 200
}
cash.textContent = player.name + player.money + "$"

function randomcard(){
    let random = Math.floor(Math.random() * 13) + 1
    if(random === 1){
        return 11
    }else if(random > 10){
        return 10
    }else {
        return random
    }
}

function startgame(){
    alive = true
    let card1 = randomcard()
    let card2 = randomcard()
    deck.push(card1,card2)
    sum = card1 + card2
    rendergame()
}

function rendergame(){
    if (sum < 21){
        message = "do you want to draw a card"
    }else if (sum === 21){
        message = "you have won with blackjack"
        let player = {
            name: "CASH: ",
            money: 400
        }
        cash.textContent = player.name + player.money + "$"
        blackjack = true
    }else if (sum > 21){
        message = "you have lost the game"
        let player = {
            name: "CASH: ",
            money: 100
        }
        cash.textContent = player.name + player.money + "$"
        alive = false
    }
    black.textContent = message

    card.textContent = "Cards: "
    for (let i = 0; i < deck.length; i++){
        card.textContent += deck[i] +" "
    }
    sumery.textContent = "Sum: " + sum 
}

function newcard(){
    if(alive === true && blackjack === false){
        let card3 = randomcard()
        sum += card3
        deck.push(card3)
        rendergame()
    }
}
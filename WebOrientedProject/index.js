
function ageinDays() {
    let yearofBirth = prompt('what is your year of birth?')
    let ageinds = (2018 - yearofBirth) * 365
    let h1 = document.createElement('h3')
    let texAnswer = document.createTextNode('you are ' + ageinds + ' days old!')
    h1.setAttribute('id', 'ageinDays')
    h1.appendChild(texAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
    //document.getElementsByClassName('result').appendChild(h1)

}

function reset() {
    document.getElementById('ageinDays').remove();

}

function generateImg() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-img-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}

function rpsGame(draw) {
    console.log(draw)
    console.log(draw.src)
    let userChoice, compChoic
    userChoice = draw.id;
    //console.log(userChoice)
    compChoic = numberToChoice(randToRpsInt());
    console.log("computer choice", compChoic)
    reustls = decideWinner(userChoice, compChoic);
    console.log(reustls)
    message = finalMessage(reustls);

    rpsFrontEnd(draw.id, compChoic, message)
    // SpeechRecognitionAlternative( )
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3)
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(draw, compChoic) {
    let rpsDtaBase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }

    let yourScore = rpsDtaBase[draw][compChoic]
    let compScore = rpsDtaBase[compChoic][draw]
    return [yourScore, compScore]
}

function finalMessage([yourScore, compScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'You Tied', 'color': 'yellow' };
    } else {
        return { 'message': 'You won', 'color': 'Green' };
    }
}

function rpsFrontEnd(humanIMageChoice, compImageChoice, finalMessage) {
    let imagDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    let humanDiv = document.createElement('div')
    let comDiv = document.createElement('div')
    let messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imagDatabase[humanIMageChoice] + " 'width='150' height='150 ' style= ' box-shadow: 0px 10px 20px blue' >"
    comDiv.innerHTML = "<img src='" + imagDatabase[compImageChoice] + " 'width='150' height='150 ' style= ' box-shadow: 0px 10px 20px rgba(243,38,24,1)' >"
    messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    const newLocal = 'flex-box-rap-div';
    document.getElementById(newLocal).appendChild(humanDiv);
    document.getElementById(newLocal).appendChild(messageDiv)
    document.getElementById(newLocal).appendChild(comDiv);

}


//challange four


let all_button = document.getElementsByTagName('button')
let coppyAllButtons = []
console.log(all_button);
for (let i = 0; i < all_button.length; i++) {
    coppyAllButtons.push(all_button[i].classList[1]);
}
console.log(all_button)

function buttonColorChnge(buttonThing) {
    console.log(buttonThing.value)

    if (buttonThing.value === 'red') {
        buttonsRed();
    } else if (buttonThing.value === 'green') {
        buttonsGreen();
    } else if (buttonThing.value === 'reset') {
        buttonCollorReset();
    } else if (buttonThing.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {

    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add('btn-danger')
    }
    let h2 = document.createElement('h2')
    h2.setAttribute('id', 'redColor')
    let text = document.createTextNode('Red color has been called ')
    h2.appendChild(text)
    document.getElementById('change-btn-color').appendChild(h2)
}
function buttonsGreen() {

    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add('btn-success')
    }

}
function buttonCollorReset() {

    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add(coppyAllButtons[i])
    }

}

function randomColors() {

    let choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i = 0; i < all_button.length; i++) {
        let number = Math.floor(Math.random() * 4)
        clrear = [choice][number]
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add(choice[number])
        console.log(choice[number] + ' the colors appended randomly ')
    }

}

//Five


let balckjackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] },
    'wins': 0,
    'losses': 0,
    'drew': 0,
    'isStand': false,
    'trunsOver': false,
};

const YOU = balckjackGame['you']
const DEALER = balckjackGame['dealer']
const hitSound = new Audio('static/sounds/swish.m4a')
const lossSound = new Audio('static/sounds/aww.mp3')
const winSound = new Audio('static/sounds/cash.mp3')

document.querySelector('#blackjack-hit-button').addEventListener("click", blackJackHit)
document.querySelector('#blackjack-deal-button').addEventListener("click", blackjackDeal)
document.querySelector('#blackjack-stand-button').addEventListener("click", dealerLogic)

function blackJackHit() {
    if (balckjackGame['isStand'] === false) {

        let card = randomCard()
        console.log(randomCard())
        showCard(card, YOU);
        updateScore(card, YOU)
        showScore(YOU);
        console.log(YOU['score'])

    }


}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img')
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage)
        hitSound.play();
    }

}

function blackjackDeal() {

    if (balckjackGame['trunsOver'] === true) {
        balckjackGame['isStand'] = false;
        let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img')
        let yourImage = document.querySelector('#your-box').querySelectorAll('img')
        console.log(yourImage)
        for (let i = 0; i < yourImage.length; i++) {
            yourImage[i].remove();

        }
        for (let i = 0; i < dealerImage.length; i++) {
            dealerImage[i].remove();

        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        balckjackGame['trunsOver'] = false;
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13)
    return balckjackGame['cards'][randomIndex]

}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + balckjackGame['cardsMap'][card[1]] <= 21) {
            activePlayer['score'] += balckjackGame['cardsMap'][card][1]
        } else {
            activePlayer['score'] += balckjackGame['cardsMap'][card][0]
        }

    } else {

        activePlayer['score'] += balckjackGame['cardsMap'][card]

    }

}




function showScore(activePlayer) {

    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST'
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms)); 
}


async function dealerLogic() {
    balckjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && balckjackGame['isStand'] === true) {

        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER)
        showScore(DEALER)
       await sleep(1000)
    }
    balckjackGame['trunsOver'] = true;
    let winner = compWins();
    showResult(winner);

}

function compWins() {
    let winner;

    if (YOU['score'] <= 21) {
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            balckjackGame['wins']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            balckjackGame['losses']++;
            winner = DEALER;
        }else if (YOU['score'] ==  DEALER['score']) {
            balckjackGame['drew']++;
    
        }
    }
    else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        balckjackGame['losses']++;
        winner = DEALER;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        balckjackGame['drew']++;

    } 
    console.log(balckjackGame)
    return winner
}




function showResult(winner) {


    let message, messageColor

    if (balckjackGame['trunsOver'] === true) {


        if (winner === YOU) {
            document.querySelector('#wins').textContent = balckjackGame['wins'];
            message = "you won:";
            messageColor = 'green';
            winSound.play();
        } else if (winner === DEALER) {
            document.querySelector('#looses').textContent = balckjackGame['losses'];
            message = 'You Lost';
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#drew').textContent = balckjackGame['drew'];
            message = 'YOU DREW'
            messageColor = 'black'
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;


    }


}
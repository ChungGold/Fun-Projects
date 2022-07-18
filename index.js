import playerCards from './playerCards.json' assert {type: 'json'};

let mHealth = 100;
let pHealth = 100;

console.log(playerCards.playerDeck[0].cardEffect.toString);

const pCard = document.getElementsByClassName('p-card');

let mTurn = () => {
    if (mHealth <= 0) {
        return;
    }
    pHealth = pHealth - 8;
    console.log('player hp ' + pHealth);
    if (pHealth <= 0) {
        alert('you have been slain!');
    }
}

pCard[0].addEventListener("click", function() {
    mHealth = mHealth-10;
    console.log('monster hp ' + mHealth);
    if (mHealth <= 0) {
        alert('monster slain!');
    }
    mTurn();
});

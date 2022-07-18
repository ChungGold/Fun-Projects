import playerCards from './playerCards.json' assert {type: 'json'};
import monsterCards from './monsterCards.json' assert {type: 'json'};
const pCard = document.getElementsByClassName('p-card');
let mHealth = 100;
let pHealth = 100;
let pBlock = 0;
let mBlock = 0;


// eval(monsterCards.monsterDeck[Math.floor(Math.random()*monsterCards.monsterDeck.length)].cardEffect);

let mTurn = () => {
    //monster dead
    if (mHealth <= 0) {
        return;
    }

    //monster attack value
    let mAttack = 5
    mAttack = mAttack - pBlock;

    //monsterer attack function
    eval(monsterCards.monsterDeck[0].cardEffect);

    //monster attack function
    if (mAttack >= 2) {
        mAttack = 5;
        pBlock = 0;
    } else {
        mAttack = 0;
        mAttack = 5;
        pBlock = 0;
        console.log('player blocks 4 damage');
    }

    //test
    console.log('player hp ' + pHealth);

    //player slain message
    if (pHealth <= 0) {
        alert('you have been slain!');
    }
}

pCard[0].addEventListener("click", function() {
    //player dead
    if (pHealth <= 0) {
        return;
    }

    //player attack value
    let pAttack = 8;
    // pAttack = pAttack - mBlock;

    //player attack function
    eval(playerCards.playerDeck[Math.floor(Math.random()*playerCards.playerDeck.length)].cardEffect);

    if (pBlock <= 0) {
        console.log('player attacks');
    } else {
        pAttack = 0;
        pAttack = 8;
        mBlock = 0;
    }

    //health test
    console.log('monster hp ' + mHealth);

    //monster slain message
    if (mHealth <= 0) {
        alert('monster slain!');
    }

    //turn change
    mTurn();
});

import playerCards from './playerCards.json' assert {type: 'json'};
import monsterCards from './monsterCards.json' assert {type: 'json'};
const pCard = document.getElementsByClassName('p-card');
const pHealthBar = document.getElementById('p-hp');
const mHealthBar = document.getElementById('m-hp');
let mHealth = 100;
let pHealth = 100;
let pBlock = 0;
let mBlock = 0;

// eval(monsterCards.monsterDeck[Math.floor(Math.random()*monsterCards.monsterDeck.length)].cardEffect);

//Health bars
pHealthBar.innerHTML = `${pHealth}/100`
mHealthBar.innerHTML = `${mHealth}/100`

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

    //player hp
    pHealthBar.innerHTML = `${pHealth}/100`;
    pHealthBar.style.width = `${pHealth}vw`;

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

    //monster hp
    mHealthBar.innerHTML = `${mHealth}/100`;
    mHealthBar.style.width = `${mHealth}vw`;

    //monster slain message
    if (mHealth <= 0) {
        alert('monster slain!');
    }

    //turn change
    mTurn();
});

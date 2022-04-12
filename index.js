let mHealth = 100;

console.log(mHealth);

const card = document.getElementsByClassName('card');

console.log(card);

card[0].addEventListener("click", function() {
    mHealth = mHealth-5;
    console.log(mHealth);
});
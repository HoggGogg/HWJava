let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let deck = [];
for (let suit of suits) {
    for (let value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        });
    }
}
let spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Spade Ace:', spadeAce);


let allSixes = deck.filter(card => card.value === '6');
console.log('All Sixes:', allSixes);

let redCards = deck.filter(card => card.color === 'red');
console.log('All Red Cards:', redCards);

let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('All Diamonds:', diamonds);

let highClubs = deck.filter(card =>
    card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
);
console.log('All Clubs from 9 and above:', highClubs);




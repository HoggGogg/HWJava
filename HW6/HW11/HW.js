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

let groupedBySuit = deck.reduce((suit, card) => {
    if (card.cardSuit === 'spade') {
        suit.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        suit.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        suit.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        suit.clubs.push(card);
    }
    return suit;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(groupedBySuit);
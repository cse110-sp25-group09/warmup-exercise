
//four functions needed
//shuffle deck: card to flip is randomized
//take: takes card from card to flip, reshuffles new card, remove taken from list
//discard: remove card from deck, do not take, reshuffle
//reset: refill list and reshuffle and clear hand
    
    
const folderPath = 'CardPNGS/'
let images = [
'10_of_clubs.png',
'10_of_diamonds.png',
'10_of_hearts.png',
'10_of_spades.png',
'2_of_clubs.png',
'2_of_diamonds.png',
'2_of_hearts.png',
'2_of_spades.png',
'3_of_clubs.png',
'3_of_diamonds.png',
'3_of_hearts.png',
'3_of_spades.png',
'4_of_clubs.png',
'4_of_diamonds.png',
'4_of_hearts.png',
'4_of_spades.png',
'5_of_clubs.png',
'5_of_diamonds.png',
'5_of_hearts.png',
'5_of_spades.png',
'6_of_clubs.png',
'6_of_diamonds.png',
'6_of_hearts.png',
'6_of_spades.png',
'7_of_clubs.png',
'7_of_diamonds.png',
'7_of_hearts.png',
'7_of_spades.png',
'8_of_clubs.png',
'8_of_diamonds.png',
'8_of_hearts.png',
'8_of_spades.png',
'9_of_clubs.png',
'9_of_diamonds.png',
'9_of_hearts.png',
'9_of_spades.png',
'ace_of_clubs.png',
'ace_of_diamonds.png',
'ace_of_hearts.png',
'ace_of_spades.png',
'jack_of_clubs2.png',
'jack_of_diamonds2.png',
'jack_of_hearts2.png',
'jack_of_spades2.png',
'king_of_clubs2.png',
'king_of_diamonds2.png',
'king_of_hearts2.png',
'king_of_spades2.png',
'queen_of_clubs2.png',
'queen_of_diamonds2.png',
'queen_of_hearts2.png',
'queen_of_spades2.png',
];

let hand = [];



let randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
document.getElementById('randomImage').src = folderPath + randomImage;

function shuffleDeck() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        document.getElementById('randomImage').src = folderPath + randomImage;
      }
function displayFirst() {
      const topImage = hand.top();

}
function take() {
  hand.push('randomImage');
  images.remove(randomIndex);
  shuffleDeck();
}

function reset() {
  let hand = []
  let images = [
    '10_of_clubs.png',
    '10_of_diamonds.png',
    '10_of_hearts.png',
    '10_of_spades.png',
    '2_of_clubs.png',
    '2_of_diamonds.png',
    '2_of_hearts.png',
    '2_of_spades.png',
    '3_of_clubs.png',
    '3_of_diamonds.png',
    '3_of_hearts.png',
    '3_of_spades.png',
    '4_of_clubs.png',
    '4_of_diamonds.png',
    '4_of_hearts.png',
    '4_of_spades.png',
    '5_of_clubs.png',
    '5_of_diamonds.png',
    '5_of_hearts.png',
    '5_of_spades.png',
    '6_of_clubs.png',
    '6_of_diamonds.png',
    '6_of_hearts.png',
    '6_of_spades.png',
    '7_of_clubs.png',
    '7_of_diamonds.png',
    '7_of_hearts.png',
    '7_of_spades.png',
    '8_of_clubs.png',
    '8_of_diamonds.png',
    '8_of_hearts.png',
    '8_of_spades.png',
    '9_of_clubs.png',
    '9_of_diamonds.png',
    '9_of_hearts.png',
    '9_of_spades.png',
    'ace_of_clubs.png',
    'ace_of_diamonds.png',
    'ace_of_hearts.png',
    'ace_of_spades.png',
    'jack_of_clubs2.png',
    'jack_of_diamonds2.png',
    'jack_of_hearts2.png',
    'jack_of_spades2.png',
    'king_of_clubs2.png',
    'king_of_diamonds2.png',
    'king_of_hearts2.png',
    'king_of_spades2.png',
    'queen_of_clubs2.png',
    'queen_of_diamonds2.png',
    'queen_of_hearts2.png',
    'queen_of_spades2.png',
    ];
    temp = document.getElementById('randomImage');
    temp.innerHTML = "";

}

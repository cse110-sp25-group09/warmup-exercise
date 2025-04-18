
    const folderPath = 'CardPNGS/'
    const images = [
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
  let deck = [...images];
  let hand = [];
  let randomIndex = Math.floor(Math.random() * images.length);
  let randomImage = images[randomIndex];
  document.getElementById('randomImage').src = folderPath + randomImage;

function shuffleDeck() {
        randomIndex = Math.floor(Math.random() * deck.length);
        randomImage = deck[randomIndex];
        document.getElementById('randomImage').src = folderPath + randomImage;
      }



function takeCard() {
        if (deck.length === 0) {
          alert("No more cards in the deck!");
          return;
        }
        if (deck.length == 1){
          document.querySelector('.flip-card-front').style.display = 'none';
          document.querySelector('.flip-card-back').style.display = 'none';

        }
        const cardTake = deck[randomIndex]
        const index = deck.indexOf(cardTake);
        if (index !== -1) {
          deck.splice(index, 1); // Remove the taken card from the deck
          hand.push(cardTake); // Add the taken card to the hand
        }
        document.getElementById('handImage').src = folderPath + cardTake; // Show back of card
        shuffleDeck(); // Shuffle the deck after taking
      }

function resetDeck() {
        hand = [];
        deck = [...images];
        document.querySelector('.flip-card-front').style.display = 'block';
        document.querySelector('.flip-card-back').style.display = 'block';
        document.getElementById('discardedImage').src = "";
        document.getElementById('handImage').src = "";
        shuffleDeck();

        
      }

function discardCard(){
        if (deck.length === 0) {
          alert("No cards in hand to discard!");
          return;
        }
        if (deck.length == 1){
          document.querySelector('.flip-card-front').style.display = 'none';
          document.querySelector('.flip-card-back').style.display = 'none';

        }
        const discardedCard = deck[randomIndex];
        const index = deck.indexOf(discardedCard);
        if (index !== -1) {
          deck.splice(index, 1); // Remove the discarded card from the deck
        }
        document.getElementById('discardedImage').src = folderPath + discardedCard; // Show back of card
        shuffleDeck(); // Shuffle the deck after discarding
}
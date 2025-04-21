//change names if necessary
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
const shuffleSound = new Audio('sounds/shuffle.mp3');
const takeSound = new Audio('sounds/take.mp3');
const discardSound = new Audio('sounds/discard.mp3');
let deck = [...images];
let hand = [];
let randomIndex = Math.floor(Math.random() * images.length);
let randomImage = images[randomIndex];
let silent = false;
document.getElementById('randomImage').src = folderPath + randomImage;

// Function to trigger the shuffle animation
function triggerShuffleAnimation() {
  // Add the shuffling class to start animations
  document.querySelector('.cards-container').classList.add('shuffling');
  
  // Remove the class after animation completes to allow it to be triggered again
  setTimeout(() => {
    document.querySelector('.cards-container').classList.remove('shuffling');
  }, 1000); // Animation duration + slight delay
}

function shuffleDeck() {
  if (!silent) {     
    shuffleSound.play();
    // Only trigger animation when not silent
    triggerShuffleAnimation();
    
    // Select a new random card after a slight delay to match the animation
    setTimeout(() => {
      randomIndex = Math.floor(Math.random() * deck.length);
      randomImage = deck[randomIndex];
      document.getElementById('randomImage').src = folderPath + randomImage;
    }, 700); // Delay to match animation
  } else {
    // If silent, just update the card without animation or delay
    randomIndex = Math.floor(Math.random() * deck.length);
    randomImage = deck[randomIndex];
    document.getElementById('randomImage').src = folderPath + randomImage;
  }
}

function takeCard() {
  takeSound.play();
  
  // Trigger the animation for take action
  triggerShuffleAnimation();
  
  if (deck.length === 0) {
    alert("No more cards in the deck!");
    return;
  }

  if (deck.length == 1) {
    document.querySelector('.flip-card-front').style.display = 'none';
    document.querySelector('.flip-card-back').style.display = 'none';
  }

  const cardTake = deck[randomIndex];
  const index = deck.indexOf(cardTake);
  if (index !== -1) {
    deck.splice(index, 1); // Remove the taken card from the deck
    hand.push(cardTake);  // Add the taken card to the hand
  }

  // ✅ Create image element
  const cardImg = document.createElement('img');
  cardImg.src = folderPath + cardTake;
  cardImg.classList.add('card-img'); // Your style class for size/appearance

  // ✅ Apply stacking styles BEFORE appending
  const cardCount = document.querySelectorAll('#stack-discard img').length;
  cardImg.style.zIndex = cardCount;
  cardImg.style.top = `${cardCount * 2}px`;  // Offset down slightly
  cardImg.style.left = `${cardCount * 20}px`; // Offset right slightly
  cardImg.style.position = 'absolute';       // Ensure it's stackable

  // ✅ Append to the discard stack
  document.getElementById('stack-discard').appendChild(cardImg);

  // Save reference for discard logic
  lastTakenCard = cardTake;
  
  // Use silent flag to prevent duplicate animations/sounds
  silent = true;
  shuffleDeck(); // Pick a new random card
  silent = false;
}

function resetDeck() {
  hand = [];
  deck = [...images];
  document.querySelector('.flip-card-front').style.display = 'block';
  document.querySelector('.flip-card-back').style.display = 'block';

  document.getElementById('randomImage').src = folderPath + 'card-backside.png';
  document.getElementById('discardedImage').src = folderPath + 'card-backside.png';
  
  const discardStack = document.getElementById('stack-discard');
  discardStack.innerHTML = ""; // Removes all <img> from the stack

  // No animation here - regular shuffle
  shuffleDeck();
}

function discardCard() {
  discardSound.play();
  if (deck.length === 0) {
    alert("No cards in hand to discard!");
    return;
  }
  
  if (deck.length == 1) {
    document.querySelector('.flip-card-front').style.display = 'none';
    document.querySelector('.flip-card-back').style.display = 'none';
  }
  
  const discardedCard = deck[randomIndex];
  const index = deck.indexOf(discardedCard);
  if (index !== -1) {
    deck.splice(index, 1); // Remove the discarded card from the deck
  }
  
  document.getElementById('discardedImage').src = folderPath + discardedCard; // Show back of card
  
  // Use silent flag to prevent duplicate animations/sounds
  silent = true;
  shuffleDeck(); // Shuffle the deck after discarding
  silent = false;
}

// Initialize the stack-discard div with the initial image if it's empty
window.onload = function() {
  const discardStack = document.getElementById('stack-discard');
  if (discardStack.children.length === 0 && !document.getElementById('image')) {
    const initialImg = document.createElement('img');
    initialImg.id = "image";
    initialImg.src = folderPath + 'card-backside.png';
    initialImg.style.width = "240px";
    initialImg.classList.add('card-img');
    discardStack.appendChild(initialImg);
  }
};

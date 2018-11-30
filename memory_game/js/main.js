// new code on Nov 28
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"	
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"	
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"	
}
]

var cardsInPlay = [];

var cardImage

var checkForMatch = function () {
  this.setAttribute('src', (cards.cardImage));
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) { 
	  alert("You found a match!");
	} else {
      alert("Sorry, try again.");
	}
};

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  cardId.setAttribute('src', cardImage);
  cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log("User flipped" + cards[cardId].cardImage);
console.log("User flipped" + cards[cardId].suit);

};

var createBoard = function () {
 for (var i = 0; i < cards.length; i++) {
 	var cardElement = document.createElement('img');
 	console.log(cardElement)
 	cardElement.setAttribute('src', "images/back.png");
 	cardElement.setAttribute('data-id', i);
 	document.getElementById('game-board').appendChild(cardElement);
 	cardElement.addEventListener('click', this.flipCard);
 	
  }
};
createBoard();

checkForMatch();

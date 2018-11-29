// new code on Nov 27
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

var flipCard = function (cardId) {
  var cardOne = cards[cardId];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

};

cardsInPlay.push(cards);

flipCard(0);
flipCard(2);

checkForMatch();

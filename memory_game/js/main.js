// new code on Nov 27
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
  cardsInPlay.push(cardOne);
  console.log("User flipped queen");
var CardTwo = cards[2];
  cardsInPlay.push(CardTwo);
  console.log("User flipped king");
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else  {
	alert("Sorry, try again.")
}
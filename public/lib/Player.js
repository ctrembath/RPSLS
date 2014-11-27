function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

function Computer(name) {
  this.name = name;
}

Computer.prototype.picks = function() {
  var availableChoices = Object.keys(new Game().PAIRS);
  var randomChoice = Math.floor(availableChoices.length * Math.random())
  this.pick = availableChoices[randomChoice];
}


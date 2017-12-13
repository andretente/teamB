let players = [];
let gameSetup = new App();
let hiScore = new App();
let addPlayers = new GameSetup();
gameSetup.renderForm();
hiScore.renderHiScore();

$(document).on("click", '#btn-addPlayers', function() {

  addPlayers.startGame();
  console.log(players);
});

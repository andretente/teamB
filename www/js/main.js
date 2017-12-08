let players = [];
let gameSetup = new GameSetup();
let hiScore = new HiScore();
gameSetup.renderForm();
hiScore.renderHiScore();

$(document).on("click", '#btn-addPlayers', function() {

  gameSetup.startGame();
  console.log(players);
});

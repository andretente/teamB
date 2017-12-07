let players = [];
let spelSetup = new SpelSetup();
spelSetup.renderForm();


$(document).on("click", '#btn-addPlayers', function() {

  spelSetup.startGame();
  console.log(players);
});

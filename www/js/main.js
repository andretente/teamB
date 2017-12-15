let players = [];
let myGame = new Player();


JSON._load('players.json')
.then(function(data){
   players = data;
   new HiScore();
});

$(document).on("click", '#btn-addPlayers', function() {
  myGame.addPlayers();
});

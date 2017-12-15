let players = [];
let frontPage = new FrontPage();
let myGame = new Player();

frontPage;

JSON._load('players.json')
.then(function(data){
   players = data;
   new HiScore();
});

$(document).on("click", '#btn-addPlayers', function() {
  myGame.addPlayers();
});
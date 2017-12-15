let players = [];
let frontPage = new FrontPage();
let myGame = new Player();
let myBoard = new Board();
//board.drawBoard();
//board.scale();

frontPage;

JSON._load('players.json')
.then(function(data){
   players = data;
   new HiScore();
});

$(document).on("click", '#btn-addPlayers', function() {
  myGame.addPlayers();
});

$(document).on('click', '.slot', function(){
  myBoard.addSlot();
});

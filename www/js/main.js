//let players = [];
let frontPage = new FrontPage();
let rulesPage = new RulesPage();
let myGame = new Game();
let myBoard = new Board();
let myFooter = new Footer();
//board.drawBoard();
//board.scale();

frontPage;
rulesPage;
myFooter;

JSON._load('players.json')
.then(function(data){
   players = data;
   new HiScore();
});

$(document).on("click", '#btn-addPlayers', function() {
  myGame.addPlayers();
});

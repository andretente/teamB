//let players = [];
let frontPage = new FrontPage();
let rulesPage = new RulesPage();
let game = new Game();
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
   new Score();
});

$(document).on("click", '#btn-addPlayers', function() {
  game.addPlayers();
});

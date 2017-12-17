let frontPage = new FrontPage();
let rulesPage = new RulesPage();
let myBoard = new Board();
let game = new Game();
let myFooter = new Footer();

frontPage;
rulesPage;
myFooter;

JSON._load('players.json')
.then(function(data){
   players = data;
   new Score();
});

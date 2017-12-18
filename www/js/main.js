let frontPage = new FrontPage();
let rulesPage = new RulesPage();
let spelPage = new SpelPage();
let myBoard = new Board();
let game = new Game();
let myFooter = new Footer();

spelPage;
frontPage;
rulesPage;
myFooter;

JSON._load('players.json')
.then(function(data){
   players = data;
   new Score();
});

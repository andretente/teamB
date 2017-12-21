let frontPage = new FrontPage();
let rulesPage = new RulesPage();
let spelPage = new SpelPage();
let myFooter = new Footer();
let game = new Game();

JSON._load('players.json')
.then(function(data){
   players = data;
   new Score();
});

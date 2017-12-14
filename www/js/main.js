let players = [];
let myGame = new Player();


// // Tell jsonflex what classes we expect it to save/load
// JSON._classes(List);

// // Load json data
// JSON._load('win-list.json').then((data) => {
// 	winList.items = data.items;
// 	renderTodoList();
// });
// JSON._load('loss-list.json').then((data) => {
// 	lossList.items = data.items;
// 	renderDoneList();
// });

// function saveWin() {
// 	JSON._save('win-list.json', {items: winList});
// 	renderVinList();
// }

// function saveLoss() {
// 	JSON._save('loss-list.json', {items: lossList});
// 	renderLossList();
// }




//let gameSetup = new App();
//let hiScore = new App();
//let addPlayers = new GameSetup();

//hiScore.renderHiScore();

$(document).on("click", '#btn-addPlayers', function() {
  myGame.addPlayers();
  JSON._save('players.json', players);
  console.log(players);
});

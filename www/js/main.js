
// let vinList = new List();
// let lossLiat = new List();

let myGame = new GameSetup();

let hiscorelist = {
  'player1': { 'wins': 3, loss: 1},
  'player2': { wins: 3, loss: 1},
}

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



let players = [];
let gameSetup = new App();
let hiScore = new App();
let addPlayers = new GameSetup();
gameSetup.renderForm();
hiScore.renderHiScore();

$(document).on("click", '#btn-addPlayers', function() {
  myGame.addPlayer();
  console.log(players);
});

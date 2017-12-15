class HiScore extends Base {
  constructor() {
    super();
    //this.players = players;
    this.renderHiscore();
  }
  renderHiscore(){
    let co = 1;
    for (let player of players) {
      $('.score-list').append(`
        <li class="list-group-item d-flex justify-content-between align-items-center mt-2">
          ${co}) ${player.name}
          <span class="badge badge-primary badge-pill">${player.hiScore}</span>
        </li>
      `);
      co++;
    }
  }
}



//   //Aiko - function to save game data
// saveGameData() { }

// JSON._save('hiscore.json', hiscore).then(function(){
//   console.log('Saved!');
// });



  
//  // let gameData = [{name:this.name, score: this.score, win: this.win, loos: this.loos}];
  //await JSON._save('hiscore.json', hiscore).then;
  //console.log('Saved!');
  //}


  


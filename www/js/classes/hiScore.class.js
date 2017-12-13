class HiScore extends Base {
  constructor() {
    super();
    this.players = [];
  //  this.score = score;
  }

  drawHiScore(player) {
    $('.score-list').append(
      `
        <li class="list-group-item d-flex justify-content-between align-items-center mt-2">
          ${player}) Spelare X
          <span class="badge badge-primary badge-pill">Score</span>
        </li>
        `
    );
  }

  renderHiScore() {
    $('.score').prepend(
      `
      <div class="row mt-4">
        <div class="col-12">
          <h2 class="text-center">Hi Score</h2>
        </div>
      </div>

      `
    );
    let co = 0;
    for (var i = 0; i < 6; i++) {
      this.drawHiScore(i + 1);
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


  


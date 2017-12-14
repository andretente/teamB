class Player extends Base{
  constructor(name, type, color){
    super();
    this.name = name;
    this.type = type;
    this.numOfGames = 0;
    this.score = 0;
    this.color = color;
    this.wins = 0;
    this.losses = 0;

    if (hiscorelist[this.name]) {
      this.wins = hiscorelist[this.name].wins;
      this.loss = hiscorelist[this.name].loss;
    }
  }

  defaults(){
    return {
      name: 'Spelare Namn',
      type: 'Human/ Robot'
    };
  }

  win(){
    this.wins++;
    // update the highscorelist
    // then save it to JSON
  }

  loose() {
    this.loose++;
    // update the highscorelist
    // then save it to JSON
  }

	play(columnIndex){

	}

}
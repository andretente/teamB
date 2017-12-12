class Player extends Base{
  constructor(name, index, score, color){
    super();
    this.name = name;
    this.index = index;
    this.score = score;
    this.color = color;
    this.wins = 0;
    this.losses = 0;
  }

  defaults(){
    return {
      name: 'Spelare Namn',
      type: 'Human/ Robot'
    };
  }

  win(){
    this.wins++;
  }

  loose() {
    this.loose++;
  }

	play(columnIndex){
		
	}
}

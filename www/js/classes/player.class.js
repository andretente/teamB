class Player extends Base{
  constructor(name, index, score, color){
    super();
    this.name = name;
    this.index = index;
    this.score = score;
    this.color = color;
  }

  defaults(){
    return {
      name: 'Spelare Namn',
      type: 'Human/ Robot'
    };
  }

	play(columnIndex){
		
	}
}

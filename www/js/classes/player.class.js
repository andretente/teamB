class Player{
  constructor(name, type, hiScore){
    this.name = name;
    this.type = type;
    this.hiScore = hiScore;
  }

  addPlayers(){
     players.push(new Player({
      name: $('#playerName1').val(),
      type: $('#type1').val(),
      hiScore: 10
    }));
    players.push(new Player({
     name: $('#playerName2').val(),
     type: $('#type2').val(),
     hiScore: 10
   }));
  }
}

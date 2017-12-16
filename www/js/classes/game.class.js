class Game extends Base{
  constructor(name, type, score, color) {
    super();
    this.players = [];
  }

  addPlayers(){
    players.push(new Player(
     $('#playerName1').val(),
     $('#type1').val(),
     0
    ));
    players.push(new Player(
     $('#playerName2').val(),
     $('#type2').val(),
     0
     ));
    JSON._save('players.json', players);
    $('#playerName1').val('');
    $('#playerName2').val('');
  }
}


// Thomas' suggestion for keeping track of whos turn it is
// this.player1 = new Player($('#playerName1'));
// this.player2 = new Player($('#playerName2'));
// this.currentPlayer = this.player1;

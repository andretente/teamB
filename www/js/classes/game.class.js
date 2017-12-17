class Game extends Base{
  constructor() {
    super();
    this.players = [];
    this.clickEvents();
  }
  // Create an object with the new player
  addPlayers(){
    let run = this;
    this.player1 = new Player(
      $('#playerName1').val(),
      $('#type1').val(),
      0,
      'Red'
    );
    this.player2 = new Player(
      $('#playerName2').val(),
      $('#type2').val(),
      0,
      'Blue'
    );
    run.checkPlayer(this.player1.name, this.player2.name)
    $('#playerName1').val('');
    $('#playerName2').val('');
  }
  // Checks if the player have played before, if not adds it to players list
  checkPlayer(playerName1, playerName2){
    let names = [];
    for (let player of players) {
      names.push(player.name);
    }
    if (names.includes(playerName1)) {
      console.log('Player 1 is a returning player');
    }
    else{
      players.push({
        name: this.player1.name,
        type: this.player1.type,
        score: this.player1.score
      });
    }
    if (names.includes(playerName2)) {
      console.log('Player 2 is a returning player');
    }
    else{
      players.push({
        name: this.player2.name,
        type: this.player2.type,
        score: this.player2.score
      });
    }
    console.log('check just ran');
    JSON._save('players.json', players);
  }
  //Method that handles all the click events in the game
  clickEvents(){
    let that = this;
    let currentPlayer = 'Player 1';
    //Event Handle to add players
    $(document).on("click", '#btn-addPlayers', function() {
      that.addPlayers();
    });
    
    $(document).on("click", '#btn-changePlayers', function() {
      currentPlayer = (currentPlayer == 'Player 1') ? ('Player 2'):('Player 1');
      console.log(currentPlayer);
    });

  }

}


// Thomas' suggestion for keeping track of whos turn it is
// this.player1 = new Player($('#playerName1'));
// this.player2 = new Player($('#playerName2'));
// this.currentPlayer = this.player1;

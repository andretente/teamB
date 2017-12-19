class Game extends Base{
  constructor() {
    super();
    this.players = [];
    this.currentPlayer = 1;
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
    if (playerName1 === '' || playerName2 === '') {
      $('#btn-addPlayers').popover('show');
    }
    else{
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
      JSON._save('players.json', players);
      $('#btn-addPlayers').attr('href','board.html');
      $('#btn-addPlayers').popover('hide');
    }

  }
  //Method that handles all the click events in the game
  clickEvents(){
    let that = this;
    //Event Handle to add players
    $(document).on("click", '#btn-addPlayers', function() {
      that.addPlayers();
    });
    //Changes player and counts score
    this.turn();
  }

  turn(){
    let currentPlayer = 'Player 1';
    $('.playerTurn').text(currentPlayer + ' make a move!');
    let scorePlayer1 = 0;
    let scorePlayer2 = 0;
    $(document).on("click", '.board', function() {
      if (currentPlayer == 'Player 1') {
        currentPlayer = 'Player 2';
        this.currentPlayer = 2;
        scorePlayer1++;
      }
      else{
        currentPlayer = 'Player 1';
        this.currentPlayer = 1;
        scorePlayer2++;
      }
      console.log('Player 1: ' + scorePlayer1);
      console.log('Player 2: ' + scorePlayer2);
      $('.playerTurn').text(currentPlayer + ' make a move!');
    });

  }
}


// Thomas' suggestion for keeping track of whos turn it is
// this.player1 = new Player($('#playerName1'));
// this.player2 = new Player($('#playerName2'));
// this.currentPlayer = this.player1;

class Game extends Base{
  constructor() {
    super();
    JSON._classes(Player);
    this.players = [];
    this.currentPlayers = [];
    this.currentPlayer = 1;
    this.clickEvents();
    new Board(this);
    if(!localStorage.gameData && location.pathname == '/board.html'){
      // We have no players so we can' start the game
      // go back to the form
      location.replace('/spel.html');
    }
    // Will only run when starting a game
    // after asking for names
    if(localStorage.gameData){
      let data = JSON._parse(localStorage.gameData);
      this.player1 = data.player1;
      this.player2 = data.player2;
      delete localStorage.gameData;
    }
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
    run.checkPlayer(this.player1.name, this.player2.name);

    // Save to local storage
    localStorage.gameData = JSON._stringify({
      player1: this.player1,
      player2: this.player2
    });
    location.replace('/board.html');

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

      $('#btn-addPlayers').popover('hide');
      JSON._save('players.json', players);

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

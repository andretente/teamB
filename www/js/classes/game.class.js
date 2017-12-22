class Game extends Base{
  constructor() {
    super();
    JSON._classes(Player);
    this.players = [];
    this.currentPlayer = 1;
    this.player1 = {};
    this.player2 = {};
    this.clickEvents();
    if(!localStorage.gameData && location.pathname == '/board.html'){
      location.replace('/spel.html');
    }
    if(localStorage.gameData){
      let data = JSON._parse(localStorage.gameData);
      this.player1 = data.player1;
      this.player2 = data.player2;
      delete localStorage.gameData;
    }
    if (location.pathname == '/board.html') {
      this.startGame();
    }
  }

  startGame(){
    new Board(this);
  }

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
    //Save in local memory
    localStorage.gameData = JSON._stringify({
      player1: this.player1,
      player2: this.player2
    });
    $('#playerName1').val('');
    $('#playerName2').val('');
  }

  checkPlayer(playerName1, playerName2){
    let names = [];
    for (let player of players) {
      names.push(player.name);
    }
    if (playerName1 === '' || playerName2 === '') {
      $('#btn-addPlayers').attr('data-content', 'Måste välja namner');
      $('#btn-addPlayers').popover('show');
    }
    else if (playerName1 === playerName2) {
      $('#btn-addPlayers').attr('data-content', 'Spelare kan inte ha samma namn');
      $('#btn-addPlayers').popover('show');
    }
    else{
      if (names.includes(playerName1)) {
        console.log('Player 1 is a returning player');
      }
      if (names.includes(playerName2)) {
        console.log('Player 2 is a returning player');
      }
      location.replace('/board.html');
      $('#btn-addPlayers').popover('hide');
    }
  }

  clickEvents(){
    let that = this;
    $(document).on("click", '#btn-addPlayers', function() {
      that.addPlayers();
      that.startGame();
    });
  }
}

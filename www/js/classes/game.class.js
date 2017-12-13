  class GameSetup extends Base{
  constructor(name,type) {
    super();
    this.players = [];
  }



  startGame(){

    players.push(new Player({
      name: $('#playerName').val(),
      type: $('#type').val()
    }));
    // this.addToList();
    // $('#title').val('');
    // $('#description').val('');
    // $('#date').val('');
  }

}

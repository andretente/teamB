class GameSetup extends Base{
  constructor(name,type) {
    super();
    this.players = [];
  }

  drawForm(player){
    $('.form').append(
        `
        <div class="row mt-4">
          <h3 class="col-12 col-md-8 col-lg-8 mx-auto">Spelare ${player}</h3>
        </div>
        <div class="row mt-2">
          <div class="col-12 col-md-8 col-lg-8 mx-auto d-inline-flex">
            <div class="col-10 m-0 p-0">
              <input type="text" class="form-control" id="playerName" aria-label="Spelare namn" placeholder="Spelare Namn">
            </div>
            <div class="col-2">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Human</option>
                <option>Robot</option>
              </select>
            </div>
          </div>
        </div>
        `
    );
  }

  renderForm(){
    $('.form').prepend(
      `
      <div class="row mt-4">
        <div class="col-12">
          <h2 class="text-center">Spela</h2>
        </div>
      </div>

      `
    );
    let co = 0;
    for (var i = 0; i < 2; i++)  {
      this.drawForm(i+1);
      co++;
    }
    $('.form').append(
      `
      <div class="row mt-4">
        <div class="col-12 col-md-8 col-lg-8 mx-auto">
          <button type="button" class="btn btn-primary float-left" id="btn-addPlayers">Starta</button>
        </div>
      </div>
      `
    );

  }

  startGame(){

    players.push(new Player({
      name: $('#playerName').val(),
      type: $('#description').val()
    }));
    // this.addToList();
    // $('#title').val('');
    // $('#description').val('');
    // $('#date').val('');
  }
}

class App{

  constructor(){
	  //super();
	}

   render(){
    super.render();
    JSON._save('aaaa-bbbb', {app: this});
  }

	drawHiScore(player){
    $('.score-list').append(
        `
        <li class="list-group-item d-flex justify-content-between align-items-center mt-2">
          ${player}) Spelare X
          <span class="badge badge-primary badge-pill">Score</span>
        </li>
        `
    );
  }

  renderHiScore(){
    $('.score').prepend(
      `
      <div class="row mt-4">
        <div class="col-12">
          <h2 class="text-center">Hi Score</h2>
        </div>
      </div>

      `
    );
    let co = 0;
    for (var i = 0; i < 6; i++)  {
      this.drawHiScore(i+1);
      co++;
    }
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
              <select class="form-control" id="type">
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
          <a href="#" class="btn btn-primary float-left" id="btn-addPlayers">Starta Not Connected</a>
        </div>
      </div>
      `
    );

  }
}

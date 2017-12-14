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

      `
    );

  }
}

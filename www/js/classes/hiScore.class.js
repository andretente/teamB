class HiScore extends Base{
  constructor() {
    super();
    this.players = [];
  }

  drawHiScore(player){
    $('.score-list').append(
        `
        <li class="list-group-item d-flex justify-content-between align-items-center mt-2">
          Spelare ${player}
          <span class="badge badge-primary badge-pill">14</span>
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
}

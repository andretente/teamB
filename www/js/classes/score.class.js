class Score extends Base {
  constructor(players) {
    super();
    this.players = players;
    this.sortHiScore();
    this.renderHiscore();
  }
  renderHiscore() {
    $('.score-list').append(`
      <article class="mt-2">
        <section class="container">
          <h1 class="pb-4 mt-4 text-center">Resultat</h1>
        </section>
      </article>
    `);

    let co = 1;
    for (let player of players) {
      $('.score-list').append(`
        <div class="score">
          <div class="row px-4">
            <div class="col-12 col-md-8 col-lg-6 mx-auto">
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center mt-1">
                  ${co}) ${player.name}
                  <span class="badge bg-blue badge-pill">${player.score}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `);
      co++;
    }
  }
  // Sort the highscore list
  sortHiScore() {
    players.sort((a, b) => a.score - b.score);
  }

}

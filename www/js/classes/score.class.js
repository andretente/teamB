class Score extends Base {
  constructor(players) {
    super();
    this.players = players;
    this.sortHiScore();
    this.renderHiscore();
  }
  renderHiscore() {
    let co = 1;
    for (let player of players) {
      $('.score-list').append(`
        <article class="mt-2">
          <section class="container">
            <div class="score">
              <div class="row">
                <div class="col-8 mx-auto">
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      ${co}) ${player.name}
                      <span class="badge bg-blue badge-pill">${player.score}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </section>
          </article>
      `);
      co++;
    }
  }
  // Sort the highscore list
  sortHiScore() {
    players.sort((a, b) => a.score - b.score);
  }

}

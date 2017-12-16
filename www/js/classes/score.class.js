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
        <li class="list-group-item d-flex justify-content-between align-items-center mt-2">
          ${co}) ${player.name}
          <span class="badge badge-primary badge-pill">${player.score}</span>
        </li>
      `);
      co++;
    }
  }


  // Sort the highscore list
  sortHiScore() {
    players.sort((a, b) => a.score - b.score);
  }

}

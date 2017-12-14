class HiScore extends Base{
  constructor() {
    super();
    this.players = players;
    this.renderHiscore();
  }
  renderHiscore(){
    let co = 1;
    for (let player of players) {
      $('.score-list').append(`
        <li class="list-group-item d-flex justify-content-between align-items-center mt-2">
          ${co}) ${player.name}
          <span class="badge badge-primary badge-pill">${player.hiScore}</span>
        </li>
      `);
      co++;
    }
  }
}

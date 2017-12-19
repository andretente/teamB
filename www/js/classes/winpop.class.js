/*jshint esversion: 6*/
class Winpop extends Base{

  constructor(winner){
    super();
    this.winner = winner;
    this.renderWinpop();
  }


renderWinpop(){
  $('.winpop-content').append(`

    <button type="button" class="btn btn-primary mt-2 mt-5" data-toggle="modal" data-target="#exampleModal">
    Du vinn !
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title " id="exampleModalLabel">GRATTIS ${this.winner.name}!</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <h2 class="vinn">Du vann!<span>&#x1F44D</span></h2>
          </div>
          
          <div class="modal-footer">

            <a href="/" role="button" class="btn btn-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Stäng</a>

            <a href="/board.html" role="button" class="btn btn-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Spela igen</a>

            <a href="/spel.html" role="button" class="btn btn-primary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Byta spelare</a>
          </div>
        </div>
      </div>
    </div>
    `);
  }
}
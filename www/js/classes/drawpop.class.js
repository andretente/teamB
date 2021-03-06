class Drawpop{

  constructor(winner,draw){
    
    this.winner = winner;
    this.draw = draw; // second player if draw
    this.renderDrawpop();
  }


  renderDrawpop(){
    $('main #main-modal').remove();
    $('main').append(`

      <button type="button" class="btn btn-primary mt-2 mt-5" data-toggle="modal" data-target="#exampleModal">
      Du vinn !
      </button>

      <div class="modal fade" id="main-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-red">
              <h2 class="modal-title text-light-grey" id="exampleModalLabel">Hej!</h2>
            </div>
            <div class="modal-body">
            <h2 class="vinn">Det var oavgjort! Försök igen!</h2>
            </div>
            <div class="modal-footer">
              <a href="/" role="button" class="btn btn-red popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Stäng</a>
              <a href="/board.html" role="button" class="btn btn-red popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">Spela igen</a>
            </div>
          </div>
        </div>
      </div>
      `);
      // Show the modal
      $('#main-modal').modal();
    }
}

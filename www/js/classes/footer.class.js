/*jshint esversion: 6*/
class Footer extends Base{

  constructor(){
    super();
    this.renderFooter();
  }


renderFooter(){
  $('footer').append(`
    <div class="container-fluid">
      <div class="row col-12 py-2">
        <div class="col-12">
          <div class="text-center text-light-grey">
            <a href="#" class="btn-red-nav mx-4">
              <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
            </a>
            <a href="#" class="btn-red-nav mx-4">
              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
            <a href="#" class="btn-red-nav mx-4">
              <i class="fa fa-envelope-open-o fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    `);
  }
}

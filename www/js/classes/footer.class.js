/*jshint esversion: 6*/
class Footer extends Base{

  constructor(){
    super();
    this.renderFooter();
  }


renderFooter(){
  $('.footer-content').append(`
    <div class="row col-12">

      <div class="col-12 col-md-4 mt-2">
        <p class="m-0">Adress:</p>
        <p class="m-0">Kungsgatan 88</p>
        <p class="m-0">Malmö, Sweden</p>
      </div>

      <div class="col-12 col-md-4 mt-2">
        <p class="m-0">www.fourinalinegame.se</p>
        <p class="m-0">info@fourinalinegame.se</p>
        <p class="m-0">anja@fourinalinegame.se</p>
      </div>

      <div class="col-12 col-md-4 mt-2">
        <p class="m-0">Kontakt: Anna Karlsson</p>
        <p class="m-0">Telefon: +46(0)123456789</p>
        <p class="m-0">Mobil: +46(0)123456789</p>
      </div>
    </div>
    `);
  }
}

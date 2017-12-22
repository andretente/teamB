class SpelPage extends Base{

	constructor(){
		super();
		this.renderSpelPage();
	}

	renderSpelPage(){
		$('.spelpagecontent').append(`
			<div>
						<h1 class="pb-4 mt-4 text-center">Ange namn</h1>
	          <div class="row mt-4">
	            <h3 class="col-12 col-md-8 col-lg-8 mx-auto">Spelare 1</h3>
	          </div>
	          <div class="row mt-2">
<<<<<<< Updated upstream
	            <div class="col-12 col-md-8 col-lg-8 mx-auto d-inline-flex">
	              <div class="col-8 col-md-9 m-0 p-0">
	                <input type="text" class="form-control" id="playerName1" aria-label="Spelare namn" placeholder="Spelare Namn">
	              </div>
	              <div class="col-4 col-md-3 pr-0">
=======
	            <div class="col-12 col-md-8 col-lg-8 mx-auto d-inline-flex row">
	              <div class="col-12 col-md-9 m-0 p-0">
	                <input type="text" class="form-control" id="playerName1" aria-label="Spelare namn" placeholder="Spelare Namn">
	              </div>
	              <div class="col-12 col-md-3 py-2 px-0 py-md-0 px-md-2">
>>>>>>> Stashed changes
	                <select class="form-control" id="type1">
	                  <option>Human</option>
	                  <option>Robot</option>
	                </select>
	              </div>
	            </div>
	          </div>
	          <div class="row mt-4">
	            <h3 class="col-12 col-md-8 col-lg-8 mx-auto">Spelare 2</h3>
	          </div>
	          <div class="row mt-2">
<<<<<<< Updated upstream
	            <div class="col-12 col-md-8 col-lg-8 mx-auto d-inline-flex">
	              <div class="col-8 col-md-9 m-0 p-0">
	                <input type="text" class="form-control" id="playerName2" aria-label="Spelare namn" placeholder="Spelare Namn">
	              </div>
	              <div class="col-4 col-md-3 pr-0">
=======
	            <div class="col-12 col-md-8 col-lg-8 mx-auto d-inline-flex row">
	              <div class="col-12 col-md-9 m-0 p-0">
	                <input type="text" class="form-control" id="playerName2" aria-label="Spelare namn" placeholder="Spelare Namn">
	              </div>
	              <div class="col-12 col-md-3 py-2 px-0 py-md-0 px-md-2">
>>>>>>> Stashed changes
	                <select class="form-control" id="type2">
	                  <option>Human</option>
	                  <option>Robot</option>
	                </select>
	              </div>
	            </div>
	          </div>
	          <div class="row mt-4">
	            <div class="col-12 col-md-8 col-lg-8 mx-auto">
	              <a href="#" class="btn btn-red float-left" id="btn-addPlayers" data-toggle="popover" data-trigger="focus" >Starta</a>
	            </div>
	          </div>
			</div>
		`);
	}
}

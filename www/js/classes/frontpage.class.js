class FrontPage extends Base{

	constructor(){
		super();
		this.renderStartPage();
	}

	renderStartPage(){
		$('.frontpagecontent').append(`
			<div>
		        <div class="row">
		          	<div class="jumbotron col-sm-12 col-lg-6 mt-5">
		            	<h1 class="display-3">Välkommen!</h1>
		            	<hr class="my-4">
		            	<p>Spela det klassiska spelet 4 i rad online!</p>
		            	<p class="lead">
		              		<a class="btn btn-light mt-4 float-right btn-lg" href="spel.html" role="button">Spela!</a>
		            	</p>
		          	</div>
		          	<div class=" col-sm-12 col-lg-6">
		            	<div class="fyrairadimg mt-5">
		              		<img class="w-75 img-fluid" src="/img/fyrairad.png">
		            	</div>
		          	</div>
		        </div>
		        <div class="row mt-5">
		          	<div class="col-12 col-md-4 mb-5">
		            	<div class="card online-game">
		              		<a href="http://www.spelo.se/action/plants-vs-zombies">
		                		<div class="btn bg-danger text-white font-weight-bold online">
		                  			SPELA
		                		</div>
		                		<img class="card-img-top" id="plants" src="/img/plants-3.jpg" alt="The game plants vs zombies">
		              		</a>
			              	<div class="card-body online-game">
			                	<h4 class="card-title text-info">Plants vs Zombies</h4>
			                	<p class="card-text">Skydda ett hus från attackerande zombier genom att plantera flera olika plantor. </p>
			              	</div>
			            </div>
		            </div>

			        <div class="col-12 col-md-4 mb-5">
			            <div class="card">
			              	<a href="http://www.agame.com/game/bomberpengu">
			                	<div class="btn bg-danger text-white font-weight-bold online">
			                  		SPELA
			                	</div>
			                	<img class="card-img-top" src="/img/pengu-3.jpg" alt="The game bomberpengu">
			              	</a>
			              	<div class="card-body online-game">
			                	<h4 class="card-title text-info">Bomberpengu</h4>
			                	<p class="card-text">Till skillnad från den klassiska Bomberman spelar man som namnet på spelet redan föreslår som en pingvin.</p>
			              	</div>
			            </div>
			        </div>

			        <div class="col-12 col-md-4 mb-5">
			            <div class="card">
			              	<a href="http://www.spelo.se/action/guns-n-glory-heroes">
			                	<div class="btn bg-danger text-white font-weight-bold online">
			                  		SPELA
			                	</div>
			                	<img class="card-img-top" src="/img/heroes.jpg" alt="The game Guns N Glory Heroes">
			              	</a>
			              	<div class="card-body online-game">
			                	<h4 class="card-title text-info">Guns n Glory Heroes</h4>
			                	<p class="card-text">Anslut dig till hjältarna i deras krig mot ondskan och skriv historia.</p>
			              	</div>
			            </div>
			        </div>
		        </div>
			</div>
		`);
	}
}
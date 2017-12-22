class FrontPage{

	constructor(){
		this.renderStartPage();
	}

	renderStartPage(){
		$('.frontpagecontent').append(`
			<article>
		        <section class="container">
		          	<div class="row">
		            	<div class="col-12 col-md-6">
		              		<div class="card border-blue mb-3 mt-4">
		                		<div class="card-body">
									<div class=row>
										<div class="col-6">
											<h4 class="card-title">Välkommen!</h4>
											<p class="card-text">Spela det klassiska spelet 4 i rad online!</p>
										</div>
										<div class="col-6">
											<img class="w-75 img-fluid float-right" src="/img/logo.svg">
										</div>
									</div>
		                  			<a href="spel.html" class="btn btn-red mt-3">Spela!</a>
		                		</div>
		              		</div>
		            	</div>
			            <div class="col-12 col-md-6">
							<div class="card border-blue mt-4">
								<div class="card-body text-center">
									<img class="w-75 img-fluid " src="/img/front.svg">
								</div>
							</div>
			            </div>
			        </div>
			        <div class="row mt-5">
						<div class="card-deck px-3 px-md-3">
							<div class="card mb-5 border-blue">
								<img class="card-img-top" src="/img/plants-3.jpg" alt="Card image cap">
								<div class="card-body">
									<h4 class="card-title">Plants and Zombies</h4>
									<p class="card-text">Skydda ett hus från attackerande zombier genom att plantera flera olika plantor. </p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-red float-right">Spela</a>
								</div>
							</div>
							<div class="card mb-5 border-blue">
								<img class="card-img-top" src="/img/pengu-3.jpg" alt="Card image cap">
								<div class="card-body">
									<h4 class="card-title">Pengu</h4>
									<p class="card-text">Till skillnad från den klassiska Bomberman spelar man som namnet på spelet redan föreslår som en pingvin.</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-red float-right">Spela</a>
								</div>
							</div>
							<div class="card mb-5 border-blue">
								<img class="card-img-top" src="/img/heroes.jpg" alt="Card image cap">
								<div class="card-body">
									<h4 class="card-title">Heroes</h4>
									<p class="card-text">Anslut dig till hjältarna i deras krig mot ondskan och skriv historia.</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-red float-right">Spela</a>
								</div>
							</div>
						</div>
			        </div>
		        </section>
      		</article>
		`);
	}
}

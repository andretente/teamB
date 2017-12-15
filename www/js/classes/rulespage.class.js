class RulesPage extends Base{

	constructor(){
		super();
		this.renderRulesPage();
	}

	renderRulesPage(){
		$('.rulespagecontent').append(`
			<div>
				<div class="row">
					<div class="col-12">
						<ul class="markers my-4 d-flex justify-content-center">
							<li></li>
							<li class="hide"></li>
							<li class="yellow hide"></li>
							<li class="yellow"></li>
							<li class=" hide"></li>
							<li class=></li>
							<li class="yellow"></li>
							<li></li>
						</ul>
						<h2 class="font-weight-bold text-center">Hur man spelar 4 i rad</h2>
						<ul class="markers my-4 d-flex justify-content-center">
							<li></li>
							<li class="yellow"></li>
							<li></li>
							<li></li>
							<li class="yellow"></li>
							<li class="hide"></li>
							<li class="yellow hide"></li>
							<li class="hide"></li>
						</ul>
					</div>
				</div>

				<div class="row my-4">
					<div class="col-12 mb-5">
						<h3 class="text-center font-weight-bold mt-4">Placera 4 av dina marker i en vertikal, horisontell eller diagonal rad!</h3>
					</div>
				</div>

				<div class="row">
					<div class="col-12 col-md-4 mb-5">
						<div class="card">
							<img class="card-img-top img-fluid" src="/img/rules/rules-3.jpg" alt="Card image cap">
							<div class="card-body">
								<h4 class="card-title font-weight-bold text-center mb-4">Välj motståndare</h4>
								<ul>
									<li class="card-text">Välj markers färg och motståndare (person eller dator).</li>
									<li class="card-text mt-3">En spelare har 21 markers.</li>
									<li class="card-text mt-3">Spelarna turas om att placera 1 marker per drag.</li>
								</ul>
							</div>

						</div>
					</div>

					<div class="col-12 col-md-4 mb-5">
						<div class="card">
							<img class="card-img-top img-fluid" src="/img/rules/rules-2.png" alt="Card image cap">
							<div class="card-body">
								<h4 class="card-title font-weight-bold text-center mb-4">Klicka en kolumn eller plats</h4>
								<ul>
									<li class="card-text mt-3">När man klickar på en kolumn eller en plats faller en marker ner.</li>
									<li class="card-text mt-3">Försök sätta en vinnande rad, samtidigt som du hindrar motspelaren från att vinna.</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="col-12 col-md-4 mb-5">
						<div class="card">
							<img class="card-img-top img-fluid" src="/img/rules/rules-7.png" alt="Card image cap">
							<div class="card-body">
								<h4 class="card-title font-weight-bold text-center mb-4">Kolla alla riktningar</h4>
								<ul>
									<li class="card-text mt-3">
										Första spelaren som placerar fyra marker i rad(vertikal, horisontell eller diagonal) vinner. Om markers är slut betyder det
										oavgjort.
									</li>
								</ul>
								<div>
									<a href="#" class="btn btn-warning text-light font-weight-bold float-right mt-3">
										<span class="float-left pr-2">&#X1F3AE</span>Börja spela</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);
	}
}
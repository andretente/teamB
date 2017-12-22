class RulesPage extends Base{

	constructor(){
		super();
		this.renderRulesPage();
	}

	renderRulesPage(){
		$('.rulespagecontent').append(`
			<div class="container">
				<h1 class="pb-4 mt-4 text-center">Spelregler</h1>
				<div class="row">
					<div class="col-12">
						<h3 class="font-weight-bold text-center mt-3">Hur man spelar 4 i rad?</h3>
						<h5 class="text-center font-weight-bold mt-2">Placera 4 av dina marker i en vertikal, horisontell eller diagonal rad!</h5>
					</div>
				</div>

				<div class="row mt-4">
					<div class="card-deck px-3 px-md-3">
						<div class="card border-blue mb-5">
							<img class="card-img-top img-fluid" src="/img/rules/rules1.svg" alt="Card image cap">
							<div class="card-body">
								<h4 class="card-title font-weight-bold text-center mb-4">Välj motståndare</h4>
								<ul>
									<li class="card-text">Välj markers färg och motståndare (person eller dator).</li>
									<li class="card-text mt-3">En spelare har 21 markers.</li>
									<li class="card-text mt-3">Spelarna turas om att placera 1 marker per drag.</li>
								</ul>
							</div>
						</div>
						<div class="card border-blue mb-5">
							<img class="card-img-top img-fluid" src="/img/rules/rules2.svg" alt="Card image cap">
							<div class="card-body">
								<h4 class="card-title font-weight-bold text-center mb-4">Klicka en kolumn eller plats</h4>
								<ul>
									<li class="card-text mt-3">När man klickar på en kolumn eller en plats faller en marker ner.</li>
									<li class="card-text mt-3">Försök sätta en vinnande rad, samtidigt som du hindrar motspelaren från att vinna.</li>
								</ul>
							</div>
						</div>
						<div class="card border-blue mb-5">
							<img class="card-img-top img-fluid" src="/img/rules/rules3.svg" alt="Card image cap">
							<div class="card-body">
								<h4 class="card-title font-weight-bold text-center mb-4">Kolla alla riktningar</h4>
								<ul>
									<li class="card-text mt-3">
										Första spelaren som placerar fyra marker i rad(vertikal, horisontell eller diagonal) vinner. Om markers är slut betyder det
										oavgjort.
									</li>
								</ul>
								<div>
									<a href="spel.html" class="btn btn-red float-right mt-3">Spela!</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);
	}
}

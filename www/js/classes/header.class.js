class Header extends Base{

	constructor(){;
	super();
	this.renderHeader();

 }

 renderHeader(){
 	$('header').append(`

 	  <nav class="navbar navbar-expand-md w-100">
	    <a class="navbar-brand" href="#">
	      <img class="img-brand" src="/img/logo.svg" alt="">
	    </a>
	    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
	      aria-label="Toggle navigation">
	      <span class="navbar-toggler-icon"><i class="fa fa-bars text-light-grey" aria-hidden="true"></i></span>
	    </button>
	    <div class="collapse navbar-collapse" id="navbarNav">
	      <ul class="navbar-nav">
	        <li class="nav-item ">
	          <a class="nav-link btn-red-nav mr-2 active" href="/">Start
	            <span class="sr-only">(current)</span>
	          </a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link btn-red-nav mr-2" href="spel.html">Spela</a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link btn-red-nav mr-2" href="rules.html">Spelregler</a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link btn-red-nav mr-2" href="score.html">Resultat</a>
	        </li>
	      </ul>
	    </div>
	  </nav>


 		`);

  }

}



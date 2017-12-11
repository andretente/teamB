this.board = [ 
	[0,0,0,0,0,0,1], 
	[0,1,0,0,0,0,0],
	[0,0,2,0,0,0,0],
	[0,0,0,2,0,0,0],
	[0,0,0,0,2,0,0],
	[0,0,0,0,0,2,0]
];

function drawBoard(){
	let html='';

	for (let row=0; row<6; row++){
		html+= `<div class="board-row">`;
				
		for (let col=0; col<7; col++){

			// html+=`<div class="slot" id="${row},${col}">`;
			let val = this.board[row][col];

			if(val == 0){
				//free slot
				html+=`<div class="slot" id="${row},${col}">`;
				// html += '';
			}
			else if(val == 1){
				//player1 slot
				html+=`<div class="slot player1" id="${row},${col}">`;
				// html += 'X';
				
			}
			else {
				// player2 slot
				html+=`<div class="slot player2" id="${row},${col}">`;
				// html += 'O';
				
			}
			html+='</div>'
			
		}
		html += '</div>';	
	}
	$('.board').html(html);
	
}
drawBoard();


function scale() {
	let orgW = 700, orgH = 600;
	let w = $(window).width();
	let h = $(window).height();
	//this scaling would fit to width
	//adjust h for headers, margins etc
	h -= $('header').outerHeight() + 40 + 80;
	w -= 20 * 2;

	let wScale = w / orgW;
	//this scaling would fit to width
	let hScale = h / orgH;	
	//this scaling would fit both width and height (we need to take the smallest)
	let scaling = Math.min(wScale, hScale);
	//apply scaling
	$('.board').css('transform', `scale(${scaling})`);
	$('.board').show();
	//set the holder to scaled width and height
	$('.board-holder').width(orgW * scaling);
	$('.board-holder').height(orgH * scaling);
}
// run on page load
scale();

//run every time the size changes
$(window).resize(scale);
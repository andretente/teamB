// 6rows
board = [ 
	[0,0,0,0,0,0,0], 
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0],
	[2,0,0,0,0,0,1]
];

// 7cols 
// this.board = [ 
// 	[0,0,0,0,0,1], 
// 	[0,0,0,0,0,0],
// 	[0,0,0,0,0,0],
// 	[0,0,0,0,0,0],
// 	[0,0,0,0,0,0],
// 	[0,0,0,0,0,0],
// 	[0,0,0,0,0,2]
// ];

$(document).on('click', '.slot', function(){
	let slot = $(this);
	let row = slot.data('rowid');
	let col = slot.data('colid');
	console.log('row', row);
	console.log('col', col);
	let playerID = 2; //activePlayer


  let emptySlotRow = 0;
  let quit = false;
  let iRow = 0;
	while(iRow < 6 && !quit){
		let val = board[iRow][col];
		if(val != 0) {
			quit = true;
		}
		else{
			emptySlotRow = iRow;
		}

		iRow++;
	}

	board[emptySlotRow][col] = playerID;

	drawBoard();
});
	
	
	

	


// function addDisc(row,col,player){
// 	this.board.splice(1,1,player);
// 	console.log('row', row);
// 	console.log('col', col);
// 	console.log('player', player);
// }
// 	drawBoard;

function drawBoard(){
	let html='';

	// for (let row=0; row<7; row++){
	for (let row=0; row<6; row++){
		html+= `<div class="board-row">`;
				
		for (let col=0; col<7; col++){

			
			// let val = this.board[row][col];
			let val = board[row][col];

			if(val == 0){
				//free slot
				// html+=`<div class="slot" data-id="row${row},ol${col}">`;
				html+=`<div class="slot" data-rowid="${row}" data-colid="${col}">`;
				// html += '';
			}
			else if(val == 1){
				//player1 slot
				// html+=`<div class="slot player1" data-id="row${row},col${col}">`;
				html+=`<div class="slot player1" data-rowid="${row}" data-colid="${col}">`;
				// html += 'X';
				
			}
			else {
				// player2 slot
				// html+=`<div class="slot player2" data-id="row${row},col${col}">`;
				html+=`<div class="slot player2" data-rowid="${row}" data-colid="${col}">`;
				// html += 'O';
				
			}
			html+='</div>'
			
		}
		html += '</div>';	
	}
	$('.board').html(html);
	
}
drawBoard();

///////////////////////////////////////////////////////////////////////////

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


///////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////

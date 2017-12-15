class Board {

	constructor() {
		this.board = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[2,0,0,0,0,0,2]
		];

		this.drawBoard();
		this.scale();
		this.addClickEvents();
		//run every time the size changes
		$(window).resize(this.scale);
	}

	drawBoard(){
		let html='';

		// for (let row=0; row<7; row++){
		for (let row=0; row<6; row++){
			html+= `<div class="board-row">`;

			for (let col=0; col<7; col++){


				// let val = this.board[row][col];
				let val = this.board[row][col];

				let playerClass = val === 0 ? '' : 'player' + val;
				html+=`<div class="slot ${playerClass}" data-rowid="${row}" data-colid="${col}"></div>`;

			}
			html += '</div>';
		}
		$('.board').html(html);

	}

	scale() {
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

	addClickEvents(){

		let board = this.board;
		let that = this;
		let check = this;

		$(document).on('click', '.slot', function(){
			let slot = $(this);
			let col = slot.data('colid');
			let playerID = 1; //activePlayer
			// let i=0;
			let freeSlot;
			for(let row=0; row<6; row++) {

				let val = board[row][col];
				// console.log('VAL',val);
				if(val == 0){
					freeSlot = row;
				}
			}
			if(freeSlot != undefined) {
				board[freeSlot][col] = playerID;
				that.drawBoard();
			}
			check.checkWin();
		});
	}

	checkWin(){
		let b = this.board;
		let win;
		let freeSlots = false;
	  //Vertical Check
		for (let row = 0; row < 6; row++) {
	    for (let col = 0; col < 7; col++){
        for(let p of [1,2]){
            if(row < 3 && b[row][col]==p && b[row+1][col]==p && b[row+2][col]==p && b[row+3][col]==p ){
                win=p;
								console.log('Player '+ p + ' wins vertically');
            }
            else if(col < 4 && b[row][col]==p && b[row][col+1]==p && b[row][col+2]==p && b[row][col+3]==p ){
                win=p;
								console.log('Player '+ p + ' wins horizontally');
            }
            else if(row < 3 && b[row][col]==p && b[row+1][col+1]==p && b[row+2][col+2]==p && b[row+3][col+3]==p ){
                win=p;
                console.log('Player '+ p + ' wins diagonally 1');
            }
            else if(row < 3 && b[row][col]==p && b[row+1][col-1]==p && b[row+2][col-2]==p && b[row+3][col-3]==p ){
                win=p;
                console.log('Player '+ p + ' wins diagonally 2');

            }
        }
				freeSlots = freeSlots || b[row][col]==0;
	    }
		}
		console.log(win ? win:(!freeSlots ? 'Draw': false));
		return win ? win:(!freeSlots ? 'Draw': false);
	}

}

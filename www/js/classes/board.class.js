class Board {
	constructor(game) {
		this.board = [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]
		];
		this.currentPlayer = 1;　
		this.drawBoard();
		this.scale();
		this.game = game;
		this.addClickEvents();
		$(window).resize(this.scale);
	}

	drawBoard() {
		let html = '';
		for (let row = 0; row < 6; row++) {
			html += `<div class="board-row">`;
			for (let col = 0; col < 7; col++) {
				let val = this.board[row][col];
				let playerClass = '';
				if (val === 0) {
					playerClass = '';
				}
				else {
					playerClass = 'player' + val;
				}
				html += `<div class="slot ${playerClass}" data-rowid="${row}" data-colid="${col}"></div>`;
			}
			html += '</div>';
		}
		$('.board').html(html);
	}

	scale() {
		let orgW = 700, orgH = 600;
		let w = $(window).width();
		let h = $(window).height();
		h -= $('header').outerHeight() + 40 + 80;
		w -= 20 * 2;
		let wScale = w / orgW;
		let hScale = h / orgH;
		let scaling = Math.min(wScale, hScale);
		$('.board').css('transform', `scale(${scaling})`);
		$('.board').show();
		$('.board-holder').width(orgW * scaling);
		$('.board-holder').height(orgH * scaling);
	}

	addClickEvents() {
		let board = this.board;
		let that = this;
		let current = this.game.player1.name;
		$('.playerTurn').text( current + ' make a move!');
		let scorePlayer1 = 0;
    let scorePlayer2 = 0;
		$(document).on('click', '.slot', function () {
			let slot = $(this);
			let col = slot.data('colid');
			let playerID = that.currentPlayer;
			let freeSlot;
			for (let row = 0; row < 6; row++) {
				let val = board[row][col];
				if (val == 0) {
					freeSlot = row;
				}
			}
			if (freeSlot != undefined) {
				board[freeSlot][col] = playerID;
				that.drawBoard();
			}
			if (that.currentPlayer == 1) {
				that.currentPlayer = 2;
				current = that.game.player2.name;
				scorePlayer1++;
			}
			else {
				that.currentPlayer = 1;
				current = that.game.player1.name;
				scorePlayer2++;
			}
			$('.playerTurn').text( current + ' make a move!');
			that.checkWin(scorePlayer1,scorePlayer2);
		});
	}

	checkWin(scorePlayer1, scorePlayer2) {
		let b = this.board;
		let win;
		let freeSlots = false;
		let that = this;
		for (let row = 0; row < 6; row++) {
			for (let col = 0; col < 7; col++) {
				for (let p of [1, 2]) {
					if (row < 3 && b[row][col] == p && b[row + 1][col] == p && b[row + 2][col] == p && b[row + 3][col] == p) {
						win = p;
					}
					else if (col < 4 && b[row][col] == p && b[row][col + 1] == p && b[row][col + 2] == p && b[row][col + 3] == p) {
						win = p;
					}
					else if (row < 3 && b[row][col] == p && b[row + 1][col + 1] == p && b[row + 2][col + 2] == p && b[row + 3][col + 3] == p) {
						win = p;
					}
					else if (row < 3 && b[row][col] == p && b[row + 1][col - 1] == p && b[row + 2][col - 2] == p && b[row + 3][col - 3] == p) {
						win = p;
					}
				}
				freeSlots = freeSlots || b[row][col] == 0;
			}
		}
		let winnerScore = scorePlayer1;
		if(win){
			let winner = win == 1 ? this.game.player1 : this.game.player2;
			console.log(this.game.player1.name);
			players.push({
			  name: winner.name,
			  type: winner.type,
			  score: winnerScore
			});
			JSON._save('players.json', players);
			new Winpop(win == 1 ? this.game.player1 : this.game.player2);
		}
		else if(!freeSlots){
			new Winpop(this.game.player1, this.game.player2);
		}
	}
}

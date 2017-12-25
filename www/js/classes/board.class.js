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
		this.scorePlayer1 = 0;
		this.scorePlayer2 = 0;
		this.initCol = 7;
		this.initRow = 6;
		this.clickEvents();
		$(window).resize(this.scale);
		$('.playerTurn').text(this.game.player1.name + ' tur!');
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

	clickEvents() {
		if (this.game.player1.type == 'Human' || this.game.player2.type == 'Human'){
			this.humanClick();
		}
		if (this.game.player1.type == 'Robot') {
			setTimeout(() => {
				this.robotClick();
			}, 1000)
		}
	}

	humanClick(){
		let board = this.board;
		let that = this;
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
				that.checkWin();
			}
		});
	}

	robotClick(){
		let board = this.board;
		let playerID = this.currentPlayer;
		let freeSlot;
		let col;
		do {
			col =  Math.floor(Math.random() * 7);
			for (let row = 0; row < 6; row++) {
				let val = board[row][col];
				if (val == 0) {
					freeSlot = row;
				}
			}
		} while (!freeSlot);
		board[freeSlot][col] = playerID;
		this.drawBoard();
		this.checkWin();

	}

	checkWin(scorePlayer1, scorePlayer2) {
		let b = this.board;
		let win = 0;
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
		if(win){
			new Winpop(win == 1 ? this.game.player1 : this.game.player2);

			this.turn(win);
		}
		else if(!freeSlots){
			new Drawpop(this.game.player1, this.game.player2);
		}
		else{
			this.turn(win);
		}
	}

	turn(win){
		let score = 0;
		if (win == 0) {
			let that = this;
			let current = this.game.player1.name;
			//$('.playerTurn').text( current + ' tur!');
			if (this.currentPlayer == 1) {
				this.currentPlayer = 2;
				current = this.game.player2.name;
				that.scorePlayer1++;
				if (this.game.player2.type == 'Robot') {
					setTimeout(() => {
						this.robotClick();
					}, 1000)
				}
			}
			else {
				this.currentPlayer = 1;
				current = this.game.player1.name;
				that.scorePlayer2++;
				if (this.game.player1.type == 'Robot') {
					setTimeout(() => {
						this.robotClick();
					}, 1000)
				}
			}
			$('.playerTurn').text( current + 's' + ' tur!');
		}
		else if (win == 1) {
			score = this.scorePlayer1 + 1;
			let winner = this.game.player1;
			this.score(score, winner);
		}
		else if (win == 2) {
			score = this.scorePlayer1;
			let winner = this.game.player2;
			this.score(score, winner);
		}
	}

	score(score, winner) {
		let playerInJson = players.find(player => player.name == winner.name); //
		if (playerInJson != undefined) {
			if (playerInJson.score > score) {
				playerInJson.score = score;
			}
		} else {
			players.push({
				name: winner.name,
				type: winner.type,
				score: score
			});
		}
		JSON._save('players.json', players);
	}
}

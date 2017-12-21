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

		if (this.game.player1.type == 'Human' || this.game.player2.type == 'Human') {
			this.addClickEvents();
		}
		if (this.game.player1.type == 'Robot') {
			setTimeout(() => {
				this.computerClick();
			}, 1000)
		}

		$(window).resize(this.scale);
	}

	drawBoard() {
		let html = '';
		for (let row = 0; row < 6; row++) {
			if (row >= 0) {
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
		//let check = this;

		$(document).on('click', '.slot', function () {
			//console.log('humanClick','checkWin ' + that.checkWin());
			// if (that.game.player1.type == 'Robot' && that.currentPlayer == 1) {
			// 	return;
			// } else if (that.game.player2.type == 'Robot' && that.currentPlayer == 2) {
			// 	return;
			// }
			let slot = $(this);
			let col = slot.data('colid');
			let playerID = that.currentPlayer; //activePlayer
			let freeSlot;

			for (let row = 0; row < 6; row++) {
				if (row >= 0) {
					let val = board[row][col];
					// console.log('VAL',val);
					if (val == 0) {
						freeSlot = row;
					}
				}

			}

			that.clickOnSlot(freeSlot, col);
		});

	}

	clickOnSlot(row, col) {
		if (this.checkWin() == 0 && row >= 0 && row < 6) {
			//console.log('continue');
			if (this.board[row][col] == 0) {
				this.board[row][col] = this.currentPlayer;
				this.drawBoard(); // that normally

				// change player
				if (this.currentPlayer == 1) {
					this.currentPlayer = 2;
					if (this.game.player2.type == 'Robot') {
						setTimeout(() => {
							this.computerClick();
						}, 1000)
					}
					this.checkWin();
				}
				else {
					this.currentPlayer = 1;
					if (this.game.player1.type == 'Robot') {
						//console.log('this.game.player1.type', this.game.player1.type);
						setTimeout(() => {
							this.computerClick();
						}, 1000)
						this.checkWin();
					}
				}

			}
		}
		else{
			console.log('no more free slots in this column');
		}

	}

	computerClick() {
		let col;
		let freeSlot;
		//console.log('computerClick','checkWin ' + this.checkWin());
		// Problem: while-loop will go on forever... = browser will freeze.

		let everythingIsFull = false;
		if (this.checkWin() == 0) {
			if (everythingIsFull) {
				console.log('Robot can not click, the board is full');
				return;
			}

			else if(freeSlot == undefined　) {
				col = Math.floor(Math.random() * 7);
				for (let row = 0; row < 6; row++) {
					if (row >= 0) {
						let val = this.board[row][col];
						if (val == 0) {
							freeSlot = row;
						}
					}

				}
			}
			this.clickOnSlot(freeSlot, col);
		}
		else{

		}

	}

	checkWin() {
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

		if (win) {
			let winner = win == 1 ? this.game.player1 : this.game.player2;

			let playerInJson = players.find(player => player.name == winner.name); // less to write but same as below

			if (playerInJson != undefined) {
				playerInJson.score++;
			} else {
				players.push({
					name: winner.name,
					type: winner.type,
					score: 1
				});
			}


			JSON._save('players.json', players);
			new Winpop(win == 1 ? this.game.player1 : this.game.player2);
		}
		else if (!freeSlots) {
			new Winpop(this.game.player1, this.game.player2);
		}
		return win;
	}
}

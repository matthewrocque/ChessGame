

let positions = [
    ["wht-rook", "wht-knight", "wht-bishop", "wht-queen", "wht-king", "wht-bishop", "wht-knight", "wht-rook"],
    ["wht-pawn", "wht-pawn", "wht-pawn", "wht-pawn", "wht-pawn", "wht-pawn", "wht-pawn", "wht-pawn"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["blck-pawn", "blck-pawn", "blck-pawn", "blck-pawn", "blck-pawn", "blck-pawn", "blck-pawn", "blck-pawn"],
    ["blck-rook", "blck-knight", "blck-bishop", "blck-queen", "blck-king", "blck-bishop", "blck-knight", "blck-rook"]
];


function construct(){
	const chessboard = document.getElementById("chessboard");
	const columnLabels = document.getElementById("columnLabels")
	const rowLabels = document.getElementById("rowLabels");
	for(let i = 0; i < 8; i++){

		const columnLabel = document.createElement("div");
		columnLabel.classList.add("grid-item");
		columnLabel.textContent = String.fromCharCode(i+65);
		columnLabels.appendChild(columnLabel);

		const rowLabel = document.createElement("div");
		rowLabel.classList.add("grid-item");
		rowLabel.textContent = (i+1);
		rowLabels.appendChild(rowLabel);

		for(let j = 0; j < 8; j++){
			let column = String.fromCharCode(j+65);
			let row = i+1;

			const square = document.createElement("div");
			square.id = column + row;
			square.classList.add("square");
			if( (j + i) % 2 == 0){
				square.classList.add("dark");
			}
			else{
				square.classList.add("light");
			}
			chessboard.appendChild(square);
		}		
	}
}




function loadPieces(){
	for(let i = 0; i < 8; i++){
		for(let j = 0; j < 8; j++){

			const item = positions[i][j];

			if(item != null){
				const spot = String.fromCharCode(j+65) + (i+1);
				const square = document.getElementById(spot);

				const img = document.createElement("img");
				img.src = 'chessPieces/' + item + '.png';
				img.alt = item;
				img.className = "chess-piece";

				img.addEventListener("click", function(){
					pieceClicked(item, spot);
				});

				square.appendChild(img);
			}
		}
	}
}

function clearHighlight(){
	for(let i = 0; i < 8; i++){
		row = i+1;
		for(let j = 0; j < 8; j++){
			column = String.fromCharCode(j+65);
			const square = document.getElementById(column+row);
			square.classList.remove("highlight-red");

			if (square.clickHandler) {
            square.removeEventListener("click", square.clickHandler);
            delete square.clickHandler;
        }
		}
	}
}

function handleSquareClick(piece, row, column) {
    return function() {
        spotClicked(piece, row, column);
    };
}

function addHightlight(piece, spot){
	spot = spot.split("");
	let column = spot[0].charCodeAt(0);
	let row = +spot[1];
	if (piece == "wht-pawn"){
		row++;
		let square = document.getElementById(String.fromCharCode(column)+row);
		square.classList.add("highlight-red");

		const clickHandler = handleSquareClick(piece, row, column);
        square.addEventListener("click", clickHandler);
		square.clickHandler = clickHandler;

		if(column>65){
			column--;
			square = document.getElementById(String.fromCharCode(column)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
       		column++;
		}

		if(column < 72){
			column++;
			square = document.getElementById(String.fromCharCode(column)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
       		column--;
		}

		if(row==3){
			row++;
			square = document.getElementById(String.fromCharCode(column)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}
	}

	if (piece == "wht-rook"){
		for(let i = row+1; i <= 8; i++){
			square = document.getElementById(String.fromCharCode(column)+i);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}

		for(let i = row-1; i > 0; i--){
			square = document.getElementById(String.fromCharCode(column)+i);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}

		for(let i = column+1; i <= 72; i++){
			square = document.getElementById(String.fromCharCode(i)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}

		for(let i = column-1; i >= 65; i--){
			square = document.getElementById(String.fromCharCode(i)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}
	}

	if (piece == "wht-knight"){
		if(row > 1){
			
		}
		if(row < 8){
			if(row < 7){

			}
		}

	}

	if (piece == "blck-pawn"){
		row--;
		let square = document.getElementById(String.fromCharCode(column)+row);
		square.classList.add("highlight-red");

		const clickHandler = handleSquareClick(piece, row, column);
        square.addEventListener("click", clickHandler);
		square.clickHandler = clickHandler;

		if(column>65){
			column--;
			square = document.getElementById(String.fromCharCode(column)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
       		column++;
		}

		if(column < 72){
			column++;
			square = document.getElementById(String.fromCharCode(column)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
       		column--;
		}

		if(row==6){
			row--;
			square = document.getElementById(String.fromCharCode(column)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}
	}

	if (piece == "blck-rook"){
		for(let i = row+1; i <= 8; i++){
			square = document.getElementById(String.fromCharCode(column)+i);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}

		for(let i = row-1; i > 0; i--){
			square = document.getElementById(String.fromCharCode(column)+i);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}

		for(let i = column+1; i <= 72; i++){
			square = document.getElementById(String.fromCharCode(i)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}

		for(let i = column-1; i >= 65; i--){
			square = document.getElementById(String.fromCharCode(i)+row);
			square.classList.add("highlight-red");

			const clickHandler = handleSquareClick(piece, row, column);
       		square.addEventListener("click", clickHandler);
       		square.clickHandler = clickHandler;
		}
	}

}

function spotClicked(piece, row, column) {
	column = String.fromCharCode(column);
	console.log(piece+ row + column);
}

function pieceClicked(piece, spot){
	clearHighlight();
	addHightlight(piece, spot);
	
}

construct();

loadPieces();
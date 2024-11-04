
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
			const square = document.createElement("div");
			square.classList.add("square");
			if( (j+i) % 2 == 0){
				square.classList.add("dark");
			}
			else{
				square.classList.add("light");
			}
			chessboard.appendChild(square);
		}		
	}
}

construct();
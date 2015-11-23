var player = 1;


function clickBtn(btn){
	if(player == 1){
	document.getElementById(btn).value= "X";
	document.getElementById(btn).disabled= "disabled";
/*turns button O*/
	player-= 1;
	winner();


} else { 
	document.getElementById(btn).value= "O";
	document.getElementById(btn).disabled= "disabled";
/*turns button X*/
	player+= 1;
	winner();
}
}

function winner () {
	console.log("running Winner")
	if (/*horizontal x winner*/
		document.getElementById("btn1").value == "X" && 
		document.getElementById("btn2").value == "X" && 
		document.getElementById("btn3").value == "X" ||
		document.getElementById("btn4").value == "X" && 
		document.getElementById("btn5").value == "X" && 
		document.getElementById("btn6").value == "X" || 
		document.getElementById("btn7").value == "X" && 
		document.getElementById("btn8").value == "X" && 
		document.getElementById("btn9").value == "X" ||

		/*vertical x winner*/
		document.getElementById("btn1").value == "X" && 
		document.getElementById("btn4").value == "X" && 
		document.getElementById("btn7").value == "X" || 
		document.getElementById("btn2").value == "X" && 
		document.getElementById("btn5").value == "X" && 
		document.getElementById("btn8").value == "X" || 
		document.getElementById("btn3").value == "X" && 
		document.getElementById("btn6").value == "X" && 
		document.getElementById("btn9").value == "X" ||

		/*diagonal x winner*/
		document.getElementById("btn1").value == "X" && 
		document.getElementById("btn5").value == "X" && 
		document.getElementById("btn9").value == "X" || 
		document.getElementById("btn3").value == "X" && 
		document.getElementById("btn5").value == "X" && 
		document.getElementById("btn7").value == "X"
		) {
		alert("X is the winner!");
		reset();
	} else if (
		/*horizontal o winner*/
		document.getElementById("btn1").value == "O" && 
		document.getElementById("btn2").value == "O" && 
		document.getElementById("btn3").value == "O" ||
		document.getElementById("btn4").value == "O" && 
		document.getElementById("btn5").value == "O" && 
		document.getElementById("btn6").value == "O" || 
		document.getElementById("btn7").value == "O" && 
		document.getElementById("btn8").value == "O" && 
		document.getElementById("btn9").value == "O" ||

		/*vertical o winner*/
		document.getElementById("btn1").value == "O" && 
		document.getElementById("btn4").value == "O" && 
		document.getElementById("btn7").value == "O" || 
		document.getElementById("btn2").value == "O" && 
		document.getElementById("btn5").value == "O" && 
		document.getElementById("btn8").value == "O" || 
		document.getElementById("btn3").value == "O" && 
		document.getElementById("btn6").value == "O" && 
		document.getElementById("btn9").value == "O" ||

		/*diagonal o winner*/
		document.getElementById("btn1").value == "O" && 
		document.getElementById("btn5").value == "O" && 
		document.getElementById("btn9").value == "O" || 
		document.getElementById("btn3").value == "O" && 
		document.getElementById("btn5").value == "O" && 
		document.getElementById("btn7").value == "O"
		)
		{alert("O is the winner!");
		reset();
	}
}

/*resets board after winner*/
function reset () {
	console.log("running reset")
	document.getElementById("btn1").value = "";
	document.getElementById("btn2").value = "";
	document.getElementById("btn3").value = "";
	document.getElementById("btn4").value = "";
	document.getElementById("btn5").value = "";
	document.getElementById("btn6").value = "";
	document.getElementById("btn7").value = "";
	document.getElementById("btn8").value = "";
	document.getElementById("btn9").value = "";

}
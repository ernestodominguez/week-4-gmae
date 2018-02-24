var timeleft = 15;

var downloadTimer = setInterval(function(){
	timeleft--;
	document.getElementById("countdowntimer").textContent = timeleft;
	if (timeleft == 0) {
		alert("Game over loser")
	}
},1500);


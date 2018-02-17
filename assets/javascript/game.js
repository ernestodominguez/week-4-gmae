$(document).ready(function(){

	function randomnum(z){
		return Math.floor(Math.random() *z)
	};

	console.log(randomnum(50));
	
$("#foto1").on("click",function(){
	var photo1 =parseInt(10);
	addscore(photo1);
	console.log(photo1);
	checkWin()
	lost()
});

$("#foto2").on("click",function(){
	var photo2 = 7;
	addscore(photo2);
	console.log(photo2);
	checkWin()
	lost()

});

$("#foto3").on("click",function(){
	var photo3 = 2;
	addscore(photo3)
	console.log(photo3);
	checkWin()
	lost()
});

$("#foto4").on("click",function(){
	var photo4 = 13;
	addscore(photo4)
	console.log(photo4);
	checkWin()
	lost()
});
document.getElementById('targetscore').innerHTML=randomnum(50);

var myscore = document.getElementById("your");
myscore.innerHTML = 0;
function addscore (z){
	var fotovalue =parseInt(z);
	myscore.innerHTML = fotovalue + parseInt(myscore.innerHTML);
}
console.log(this.myscore.innerHTML);

function checkWin(){
	if (parseInt(myscore.innerHTML) == parseInt(document.getElementById('targetscore').innerHTML)){
//win
alert("win")
}
}
function lost(){
	if (parseInt(myscore.innerHTML) > parseInt(document.getElementById("targetscore").innerHTML)){
		alert("Get Better!")
	}

}









});
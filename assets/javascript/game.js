$(document).ready(function() {
	// all your code here
	var yourSum = 0;
	var randomNumber;
	var wins = 0;
	var losses = 0;
	var meth;
	var coke;
	var ecs;
	var weed;
function game (){

	randomNumber = Math.floor((Math.random() * 120) + 19);
	$("#GoalNumber").html("<p> Your number to match is: </p> <h1>"+ randomNumber + "</h1>");

	var meth = Math.floor((Math.random() * 11) + 2);
	$("#meth").attr("value", meth);

	var coke = Math.floor((Math.random() * 11) + 2);
	$("#coke").attr("value", coke);

	var ecs = Math.floor((Math.random() * 11) + 2);
	$("#ecstasy").attr("value", ecs);

	var weed = Math.floor((Math.random() * 11) + 2);
	$("#weed").attr("value", weed);
}
game();
	$("img").on("click", function(){
		var elton = $(this).attr("value");
		yourSum = yourSum + parseInt(elton);
		console.log(yourSum);
		$("#YourSum").html("<p> Your drugs currently total: </p> <h1>" + yourSum + "</h1>");
			if (randomNumber < yourSum) {
				alert("you suuuuuuck lol");
				losses++;
				$("#L").html("Losses: " + losses);
				yourSum = 0;
				$("#YourSum").html("<p> Your drugs currently total: </p> <h1>" + yourSum + "</h1>");
				game();

			}
			else if (randomNumber === yourSum) {
				alert("lucky guess... bitch");
				wins++;
				$("#W").html("Wins: " + wins);
				yourSum = 0;
				$("#YourSum").html("<p> Your drugs currently total: </p> <h1>" + yourSum + "</h1>");
				game();
			}

	})



});
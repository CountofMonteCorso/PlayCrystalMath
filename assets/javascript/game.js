$(document).onReady(function() {
	// all your code here
	var yourMagicNumber = 0;
	var randomNumber = randomNumGen();
	var wins = 0;
	var losses = 0;
	var drugz

	function randomNumDrugz() {
		return {
			meth: {
				points: Math.floor(Math.random() * 12) + 1;
				imageURL: "../images/meth.jpg"
			},
			weed: {
				points: Math.floor(Math.random() * 12) + 1;
				imageURL: "../images/weed.jpg"
			},
			ecstasy: {
				points: Math.floor(Math.random() * 12) + 1;
				imageURL: "../images/ecstasy.jpg"
			},
			coke: {
				points: Math.floor(Math.random() * 12) + 1;
				imageURL: "../images/coke.jpg"
			}
		}
	}

	function randomNumGen() {
		return Math.floor(Math.random() * 119) + 30;
	}

	function setGame () {
		yourMagicNumber = 0;
		drugz = randomNumDrugz();
		randomNumber = randomNumGen(); 
		$("#GoalNumber").text(randomNumber)
	}
	// updateDom(didUserWin)

	function renderDrugz() {
		for (var key in drugz) {
			var drugDiv = $("<div class='drugz-button' dataname='" + key +"'>")
			var drugImg = $("<img alt='image' class='drug-img'>").attr("src", drugz[key].imageURL)
			drugDiv.append(drugImg)
			$("#drug-area").append(drugDiv)
		}
	}

	// updateMagicNumber(crystal)

	// renderMagicNumber()
});
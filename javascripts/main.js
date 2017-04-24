$(document).ready(function(){

	let domString= "";
	// let dataStringTwo = "https://teamtreehouse.com/" + playerTwo + ".json";
	$("#start-match").click(() => {
		let playerOne = $("#box-one").val();
		let playerTwo = $("#box-two").val();
		startCageMatch(playerOne);
	});

	const startCageMatch = (playerOne) => {
	    Promise.all([loadContestantOne(playerOne), loadContestantTwo()])
	        .then(function(resultz){
				let contestantOne = resultz[0];
				console.log("contestantOne.name",contestantOne);
	            let contestantTwo = resultz[1];
	            resultz.forEach(function(ajaxCalls){
	                ajaxCalls.forEach(function(dataStringOne){
	                    contestantOne.push(dataStringOne);
	                    console.log("contestantOne", contestantOne);
	                });
	            });
	            writeDOM();
	        });

	};

	const writeToDOM = () => {
		$("#cage").append(domString);
	};

    const loadContestantOne = (playerOne) => {
        return new Promise((resolve, reject) => {
		let dataStringOne = `https://teamtreehouse.com/${playerOne}.json`;
		console.log(playerOne);
            $.ajax(dataStringOne)
            .done((data1) => resolve(data1))
            .fail((error1) => reject(error1));
        });
    };

    const loadContestantTwo = () => {
        return new Promise((resolve, reject) => {
            $.ajax("https://teamtreehouse.com/krissycaron.json")
            .done((data2) => resolve(data2))
            .fail((error2) => reject(error2));
        });
    };

    
 //    Promise.all
	// loadContestantOne().then((result) => {
	// 	contestantOne = result;
	// 	console.log("contestantOne", contestantOne);

	// });

	// loadContestantTwo().then((result) => {
	// 	contestantTwo = result;
	// 	console.log("contestantTwo", contestantTwo);
	// });



});

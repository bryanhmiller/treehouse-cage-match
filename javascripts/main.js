$(document).ready(function(){

	let myTeamTreeHouse = [];

	// const loadContestant1 = () => {
	// 	return new Promise((resolve, reject) => {
	// 		$.ajax("https://teamtreehouse.com/krissycaron.json") 
	// 		.done((data1) => resolve(data1.myTeamTreeHouse))
	// 		.fail((error) => reject(error));
	// 	}); 
	// };
    const loadContestantOne = () => {
        return new Promise((resolve, reject) => {
            $.ajax("https://teamtreehouse.com/bryanmiller5.json")
            .done((data1) => resolve(data1.bryanmiller5))
            .fail((error1) => reject(error1));
        });
    };

    const loadContestantTwo = () => {
        return new Promise((resolve, reject) => {
            $.ajax("https://teamtreehouse.com/krissycaron.json")
            .done((data2) => resolve(data2.krissycaron))
            .fail((error2) => reject(error2));
        });
    };

//     var firstDinosaurJSON = function(){
//     	return new Promise(function(resolve, reject){
//     		$.ajax("./db/dinosaurs1.json").done(function(data1){
//     			resolve(data1.dinosaurs1);
// 	    	}).fail(function(error1){
// 	    		reject(error1);
// 	    	})
//     	})
// 	};


// firstDinosaurJSON().then(function(jsonData1){
// 	console.log(jsonData1)
// 	dinosaurs = jsonData1
// 	writeDOM();	
// }).catch(function(jsonDataFail1){
// 	console.log(jsonDataFail1);
// });
	// var constestantOneJSON = function(){
 //        return new Promise(function(resolve, reject){
 //            $.ajax("https://teamtreehouse.com/krissycaron.json")
 //            .done(function(data1){
 //                resolve(data1.myTeamTreeHouse);
 //            }).fail(function(error1){
 //                reject(error1);
 //            });
 //        });
 //    };

	// const loadContestant2 = () => {
	// 	return new Promise((resolve, reject) => {
	// 		$.ajax("https://teamtreehouse.com/krissycaron.json") 
	// 		.done((data1) => resolve(data1.humans))
	// 		.fail((error) => reject(error));
	// 	}); 
	// }
		// .then(function(result){
		// 	result.forEach(function(xhrResult){
		// 		xhrResult.forEach(function(animal){
		// 			myAnimals.push(animal);

 //    loadContestantOne().then(function(jsonData1){
	//     jsonData1.forEach(result) => {
	//     	myTeamTreeHouse.push(result);
	//     }
	//     console.log("myTeamTreeHouse", myTeamTreeHouse);
	// });    
	// Promise.all([loadContestantOne(), loadContestantTwo()])
	// .then(function(result){
	// 	console.log("result", result);
	// 	result.forEach(function(xhrResult){
	// 		console.log("xhrResult", xhrResult);
	// 		xhrResult.forEach(function(data){
	// 			contestanOne.push(data);
	// 			console.log("contestanOne", contestanOne);
	// 		});
	// 	});
	// })
	// .catch(function(errors){
	// 	console.log(errors);
	// });


	Promise.all([loadContestantOne() ,loadContestantTwo()])
	.then((result) => {
		result.forEach((xhrResult) => {
			xhrResult.forEach((teamtreehouse) => {
				myTeamTreeHouse.push(teamtreehouse);
			});
		});
		// writeToDOM(myHumans);
		console.log(myTeamTreeHouse);
	})
	.catch(function(errors){
		console.log(errors);
	});


});

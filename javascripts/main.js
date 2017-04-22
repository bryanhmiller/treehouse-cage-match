$(document).ready(function(){

	let myTeamTreeHouse = [];

	// const loadContestant1 = () => {
	// 	return new Promise((resolve, reject) => {
	// 		$.ajax("https://teamtreehouse.com/krissycaron.json") 
	// 		.done((data1) => resolve(data1.myTeamTreeHouse))
	// 		.fail((error) => reject(error));
	// 	}); 
	// };

	var constestantOneJSON = function(){
        return new Promise(function(resolve, reject){
            $.ajax("https://teamtreehouse.com/krissycaron.json").done(function(data1){
                resolve(data1.myTeamTreeHouse);
            }).fail(function(error1){
                reject(error1);
            });
        });
    };

	// const loadContestant2 = () => {
	// 	return new Promise((resolve, reject) => {
	// 		$.ajax("https://teamtreehouse.com/krissycaron.json") 
	// 		.done((data1) => resolve(data1.humans))
	// 		.fail((error) => reject(error));
	// 	}); 
	// };

    constestantOneJSON().then(function(xhrData){
	    console.log("xhrData", xhrData);
	    myTeamTreeHouse = xhrData;
	    console.log("myTeamTreeHouse", myTeamTreeHouse);
	});    


	// Promise.all([loadContestant1()])// ,loadContestant2()
	// .then((result) => {
	// 	result.forEach((xhrResult) => {
	// 		xhrResult.forEach((teamtreehouse) => {
	// 			myTeamTreeHouse.push(teamtreehouse);
	// 		});
	// 	});
	// 	// writeToDOM(myHumans);
	// 	console.log(myTeamTreeHouse);
	// })
	// .catch(function(errors){
	// 	console.log(errors);
	// });


});

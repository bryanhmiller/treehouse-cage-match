$(document).ready(function(){

	const loadContestant1 = () => {
		return new Promise((resolve, reject) => {
			$.ajax("https://teamtreehouse.com/krissycaron.json") 
			.done((data1) => resolve(data1.humans))
			.fail((error) => reject(error));
		}); 
	};

	const loadContestant2 = () => {
		return new Promise((resolve, reject) => {
			$.ajax("https://teamtreehouse.com/krissycaron.json") 
			.done((data1) => resolve(data1.humans))
			.fail((error) => reject(error));
		}); 
	};

	Promise.all([loadContestant1(), loadContestant2()])
	.then((result) => {
		result.forEach((xhrResult) => {
			xhrResult.forEach((animal) => {
				myAnimals.push(animal);
			});
		});
		for (let i = 0; i < myHumans.length; i++) {
			for (let j = 0; j < myAnimals.length; j++) {
				if (checkForTypeMatch(myHumans[i], myAnimals[j]) && checkForKidFriendly(myHumans[i], myAnimals[j])){
					myHumans[i].matches.push(myAnimals[j]);
				}
			}
		}
		writeToDOM(myHumans);
	})
	.catch(function(errors){
		console.log(errors);
	});


});

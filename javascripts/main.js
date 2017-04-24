$(document).ready(function(){

	let contestantOne = [];
	let contestantTwo = [];
	let domString= "";

	const writeToDOM = () => {
		domString += `<img class="img-circle" src="${contestantOne.gravatar_url}"/>`;
		$("#cage").append(domString);
	}:

    const loadContestantOne = () => {
        return new Promise((resolve, reject) => {
            $.ajax("https://teamtreehouse.com/bryanmiller5.json")
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


	loadContestantOne().then((result) => {
		contestantOne = result;
		console.log("contestantOne", contestantOne);

	});

	loadContestantTwo().then((result) => {
		contestantTwo = result;
		console.log("contestantTwo", contestantTwo.badges.name);
	});



});

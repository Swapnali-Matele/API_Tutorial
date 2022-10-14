console.log("game");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1de5b782fmsh42fc9a3363de012p169536jsn3cb41ce5d8c4',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thrones', options)
	.then( (apidata) => {
		return apidata.json();
	})
	.then( (actualData) => {
		console.log(actualData);
	})
	.catch(err => console.error(err));
	
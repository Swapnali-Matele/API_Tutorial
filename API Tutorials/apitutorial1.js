const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1de5b782fmsh42fc9a3363de012p169536jsn3cb41ce5d8c4',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};

fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
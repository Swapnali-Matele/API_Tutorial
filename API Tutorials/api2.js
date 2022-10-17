const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1de5b782fmsh42fc9a3363de012p169536jsn3cb41ce5d8c4',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

fetch('https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5', options)
	.then(apidata => apidata.json())
	.then(actualData => {
		console.log(actualData);

		const artists = actualData.artists;
		const tracks = actualData.tracks;
		displayPlayList(artists,tracks);
	})
	.catch(err => console.error(err));

	function displayPlayList(artists,tracks){

		console.log(artists.hits[0].artist.name);

		document.getElementById('demo').innerHTML = `Best Hits of ${artists.hits[0].artist.name} in 2022`
		//document.getElementsByTagName('img').innerHTML = `${artists.hits[0].artist.avatar}`

		for (let i = 0; i < artists.hits.length; i++) {



			const newDiv = document.createElement("div");
			newDiv.className = "div1";
			console.log(newDiv);

			const artistName = document.createElement("p");
            artistName.innerHTML = artists.hits[i].artist.name;
			newDiv.appendChild(artistName);

			console.log(artistName);

			const imageArticle = document.createElement("img");
            imageArticle.src = artists.hits[i].artist.avatar;
			console.log(artists.hits[0].artist.avatar);
            imageArticle.height = '400';
            newDiv.appendChild(imageArticle);
			console.log(imageArticle);

			// for (let j = 0; j < tracks.hits.length; j++){

			// const title = document.createElement("p");
			// title.innerHTML = tracks.hits[j].snippet;
			// console.log(title);
			// }

			const Link = document.createElement("p");
            Link.innerHTML = `Click on link for song: <br> `;
            newDiv.appendChild(Link);

			const weburl = document.createElement("a");
            weburl.href = artists.hits[i].artist.weburl;
			weburl.innerHTML = artists.hits[i].artist.name + "<br>";
            newDiv.appendChild(weburl);
			console.log(weburl);

			//Styling newDiv
			newDiv.style.padding = "10px";
			newDiv.style.margin = "20px";
			newDiv.style.borderRadius = "15px";
			newDiv.style.fontFamily = "";
			newDiv.style.display = "block";
			newDiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
			newDiv.onmouseover = () => {
				newDiv.style.boxShadow = "0 16px 32px 0 rgba(0, 0, 0, 0.2)";
			};
			newDiv.onmouseout = () => {
				newDiv.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
			};
			newDiv.style.maxWidth = "400px";
			newDiv.style.textAlign = "center";
			newDiv.style.marginBottom = "10px";
			newDiv.style.backgroundColor = "pink";

			//image alignment
			imageArticle.style.alignContent ="center"

			document.querySelector('#demo').appendChild(newDiv);
			
			
		}
	}

	
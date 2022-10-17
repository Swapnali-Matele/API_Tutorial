const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1de5b782fmsh42fc9a3363de012p169536jsn3cb41ce5d8c4',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=India', options)
	.then(apidata => apidata.json())
	.then(actualData => {
        console.log(actualData)

        const location = actualData.location;
        const current = actualData.current;
        displayWeatherForcast(location,current);

    
    })
	.catch(err => console.error(err));

    function displayWeatherForcast(location,current){

        const newDiv = document.createElement("div");
        const className ='div1'

        const Location = document.createElement("p");
        Location.innerHTML = location.name;
	    newDiv.appendChild(Location);
        
        const region = document.createElement("p");
        region.innerHTML = location.region  ;
	    newDiv.appendChild(region);

        const Time_zone = document.createElement("p");
        Time_zone.innerHTML = location.tz_id;
	    newDiv.appendChild(Time_zone);

        const Local_time = document.createElement("p");
        Local_time.innerHTML = new Date();
        console.log(location.localtime);
	    newDiv.appendChild(Local_time);

        const Humidity = document.createElement("p");
        Humidity.innerHTML = current.humidity;
        console.log(current.humidity);
	    newDiv.appendChild(Humidity);

        const Pressure = document.createElement("p");
        Pressure.innerHTML = current.pressure_in;
        console.log(current.pressure_in);
	    newDiv.appendChild(Pressure);

        const Temprature = document.createElement("p");
        Temprature.innerHTML = current.temp_c;
        console.log(current.temp_c);
	    newDiv.appendChild(Temprature);

        document.querySelector('#demo').appendChild(newDiv);


    }
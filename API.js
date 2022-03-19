
var image = document.querySelector(".image")
var weather_data
function update()
{
	let city=document.getElementById("city").value;
	if(city !== "")
	{
	document.querySelector(".loading").style.display = "flex"
	fetch("https://api.weatherbit.io/v2.0/current?key=91fe5d5f2b874615975bdb167f70aa67&city="+city+"&lang=en")
		.then(response => response.json())
		.then(data => {
			weather_data = data;
			console.log(data);
			document.querySelector("#temperature").innerHTML = data.data[0].temp + "<sup>o</sup>C";
			document.querySelector("#description").innerText = data.data[0].weather.description;
			document.querySelector("#city_output").innerText = data.data[0].city_name;
			image.src = "https://www.weatherbit.io/static/img/icons/" + data.data[0].weather.icon + ".png"

			document.querySelector("#result_success").classList.remove("hidden");
			document.querySelector("#result_success").classList.add("visible");
			document.querySelector("#result_failure").classList.remove("visible");
			document.querySelector("#result_failure").classList.add("hidden");

			document.querySelector(".loading").style.display = "none"
		})
		.catch(err => {
			console.error(err);
			document.querySelector(".loading").style.display = "none"
			document.querySelector("#result_failure").classList.remove("visible");
			document.querySelector("#result_failure").classList.add("hidden");
			document.querySelector("#result_success").classList.remove("hidden");
			document.querySelector("#result_success").classList.add("visible");
		});	
	}
}


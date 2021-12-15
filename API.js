

function update()
{
	let city=document.getElementById("city").value;
	let country=document.getElementById("country").value;
	if(city !== "" || country!== "")
	{
	document.querySelector(".loading").style.display = "flex"
	fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?&city="+city+"&country="+country+"&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f43d8a7e02mshb001ea2faa3b125p177b37jsn3a0a9ec6f18c",
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
	}
	})
	.then(response => response.json())
	.then(data => {
	document.querySelector(".loading").style.display = "none"
  	console.log(data);
  	document.querySelector(".output").innerHTML="Temperature: "+data.data[0].temp+" <sup>o</sup>C";
	})
	.catch(err => {
	console.error(err);
	document.querySelector(".loading").style.display = "none"
	document.querySelector(".output").innerText="Please enter a valid city and country name"
	});	
	}
}


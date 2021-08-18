

function update()
{
	let city=document.getElementById("city").value;
	let country=document.getElementById("country").value;
	fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?&city="+city+"&country="+country+"&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f43d8a7e02mshb001ea2faa3b125p177b37jsn3a0a9ec6f18c",
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
  console.log(data);
  document.getElementById("output").innerHTML="Temperature: "+data.data[0].temp+" <sup>o</sup>C";
})
.catch(err => {
	console.error(err);
	document.getElementById("output").innerText="Please enter a valid city and country name"
});	
}


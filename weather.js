let button = document.querySelector("#button")




const weather = () => {

  let temperature = document.querySelector("#temperature")
  let input = document.querySelector("#input").value

  const init = { method: 'GET',
                 cache: 'default' };

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=9667faffc8cb6daf064367ffd836770d`, init)
    .then(function(response) {

  if(response.ok) {
    response.json().then(function(data) {
      temperature.innerHTML = `${Math.round(data.main.temp)}°C <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>`
    })
  }
    else {
    console.log(response.status)
  }

})
}

button.addEventListener('click', weather)

weather()

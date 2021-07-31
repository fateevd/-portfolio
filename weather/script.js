let params = '';
let city = prompt("Укажите город");

    if(city) { 
        get(city);
    }
    else { 
    error();
    }

function error() { 
    document.querySelector('.weater').innerHTML = `<div class="error">Вы не правильно указали город</div>`;
}

function get(city) { 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=link`)
    .then( (resp) => {return resp.json() })
    .then( (data) => {
        params = `<h2 class="city">${data.name}</h2>
        <div class="number">${Math.round(data.main.temp -273) + ' &#176'}</div>
        <img class="icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h3 class="status">${data.weather[0].description}</div>
        <div class="sun">Восход солнца в: ${new Date(data.sys.sunrise * 1e3).toISOString().slice(-13, -5)}</div> 
        <div class="sun"> Закад солнца в:${new Date(data.sys.sunset * 1e3).toISOString().slice(-13, -5)}</div`;
        document.querySelector('.weater').innerHTML = params;  
        
    })    
    .catch(() => {
        error();
    });
    
}



        
        
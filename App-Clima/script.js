const resultado = document.querySelector('.resultado');
const form = document.querySelector('.get-weather');
const city = document.querySelector('#city');
const country = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (city.value === '' || country.value === ''){
        error('Alguno de los campos se encuentran vacío');
        return;
    }

    api(city.value, country.value);

    // console.log(city.value);
    // console.log(country.value);
})

function api(city,country){
    const apiKey = '5681709cd3d3c5c3a981b4a4cf2de98e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

    fetch(url) 
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if(dataJSON.cod === '404'){
                error('Ciudad no Encontrada');
            } else {
                limpiarHTML();
                clima(dataJSON)
            }
            // console.log(dataJSON)
        });
    }

function clima(data){
    const { name, 
            main:{
                    temp,
                    temp_min,
                    temp_max,
                },
            weather:[arr]
        } = data;
    
    const cent = grados(temp);
    const min = grados(temp_min);    
    const max = grados(temp_max);

    const contenido = document.createElement('div');

    contenido.innerHTML = `
            <h2>Clima en ${name}</h2>
            <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="logo">
            <h2>${cent}°C</h2>
            <p>Máxima: ${max}°C</p>
            <p>Mínima: ${min}°C</p>
    `;
    
    resultado.appendChild(contenido)
}

function error(msg) {
    console.log(msg);
    const alerta = document.createElement('p');
    alerta.classList.add('alerta-msg');
    alerta.innerHTML = msg;
    
    form.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    }, 3000);
}

function grados (temp){
    return parseInt(temp - 273.15);
}

function limpiarHTML (){
    resultado.innerHTML = '';
}
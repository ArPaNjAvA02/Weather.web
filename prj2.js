let result =document.getElementById("result");
let searchbtn =  document.getElementById("searchbtn");
let cityref = document.getElementById("city");

// function to fetch weather details and display them on the screen  
let getWeather = () => {
    let cityValue = cityref.value;
    // if yhe input was empty 

    if(cityValue.length == 0){
        result.innerHTML=`<h3>Please Enter the city name </h3>`;
    }
    else {
     
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    fetch(url).then((resp) => resp.json() )
    // if city name is valid
    .then(data => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
        console.log(data.main.feels_like);
        console.log(data.wind.speed);
         result.innerHTML=`<h2>${data.name}</h2>
         <h4 class="weather">${data.weather[0].main}</h4>
         
         <h4 class="desc">${data.weather[0].description}</h4>
         <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
         
         <h3>Wind : ${data.wind.speed}</h3> <br/>
         <h1>${data.main.temp}&#176;c</h1> 
         <div id="tempContainer">
        <div>
        <h4 id="title">Max temp</h4>
        <h4 class="title">${data.main.temp_max}&#176;c</h4>
        </div>
        <div>
        <h4 id="title">Min Temp</h4>
        <h4 class="title">${data.main.temp_min}&#176;c</h4>
        </div>
        <div>
        <h4 id="title">Feels like </h4>
        <h4 class="ttile">${data.main.feels_like}&#176;c</h4>
        </div>
        </div>`;
          } )
    .catch(() =>{
        result.innerHTML=`<h3>City not found</h3>`
    });


    }
};
window.addEventListener("load" ,getWeather);
window.addEventListener("click" ,getWeather);


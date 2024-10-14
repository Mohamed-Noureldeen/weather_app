let search=document.getElementById("search");
let city=document.querySelector(".city");
let citydegree=document.querySelector(".citydegree");
let weatherImage=document.querySelector(".weather-image img");
let weatherdesc=document.querySelector(".weather-desc");
let nextImage=document.querySelector(".weather-image-next img");
let nextImage2=document.querySelector(".weather-image-next2 img");
let degreeNext=document.querySelector(".degree-next");
let degreeNextS=document.querySelector(".next-degrre-s");
let nextDesc=document.querySelector(".next-desc");
let degreeNext2=document.querySelector(".degree-next2");
let degreeNext2S=document.querySelector(".next-degree2-s");
let nextDesc2=document.querySelector(".next-desc2");
let currentDay=document.querySelector(".currnt-day");
let NextDay=document.querySelector(".next-day")
let NextDay2=document.querySelector(".next-next-day")

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
async function gitapi(x){
    let dateapi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5b46dcbd3f45454dbf9161743241210&q=${x}&days=3`);
    let data=await dateapi.json();
    console.log(data);
    city.innerHTML=data.location.name
    citydegree.innerHTML=data.current.temp_c;
    weatherdesc.innerHTML=data.current.condition.text;
    weatherImage.src=data.current.condition.icon;
    nextImage.src=data.forecast.forecastday[1].day.condition.icon;
    degreeNext.innerHTML=data.forecast.forecastday[1].day.maxtemp_c;
    degreeNextS.innerHTML=data.forecast.forecastday[1].day.mintemp_c;
    nextDesc.innerHTML=data.forecast.forecastday[1].day.condition.text;
    degreeNext2.innerHTML=data.forecast.forecastday[2].day.maxtemp_c;
    degreeNext2S.innerHTML=data.forecast.forecastday[2].day.mintemp_c;
    nextImage2.src=data.forecast.forecastday[2].day.condition.icon;
    nextDesc2.innerHTML=data.forecast.forecastday[2].day.condition.text;
    

    currentDay.innerHTML=getday(data.forecast.forecastday[0].date)
    NextDay.innerHTML=getday(data.forecast.forecastday[1].date)
    NextDay2.innerHTML=getday(data.forecast.forecastday[2].date)
    // console.log(data.forecast.forecastday[0].day.avgtemp_c);
    // console.log(data.forecast.forecastday[1].day.avgtemp_c);
    // console.log(data.forecast.forecastday[2].day.avgtemp_c);
    
    
    
}
search.addEventListener("keyup",(e)=>{
gitapi(e.target.value)
})

function getday(x){
let date = new Date(x);
let dayOfWeek = date.getDay();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
return days[dayOfWeek];
}
let date = new Date('2024-04-04');
// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
let dayOfWeek = date.getDay();
let month=date.getMonth()
console.log(month);

console.log(dayOfWeek);


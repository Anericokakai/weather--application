const search = document.querySelector(".search");
const city = document.querySelector(".CityCountry");
const time = document.querySelector(".time");
const imageContainer = document.querySelector(".image");
const degree = document.querySelector(".degree");
const desc = document.querySelector(".desc");
const windspeed = document.querySelector(".windspeed");
const humid = document.querySelector(".humidity");
const cloud= document.querySelector(".cloud");
const input=document.querySelector(".inputcontainer")


const mother=document.querySelector('.mother')
const container=document.querySelector('.container')

// generating random image for the background

/*function changebg(){
    const images=[
        'url(./images/image3.jpg)',
        'url(./images/image1.jpg)',
        'url(./images/image2.jpg)',
        'url(./images/image4.jpg)',
        'url(./images/image5.jpg)',
        'url(./images/image6.jpg)',
        'url(./images/image7.jpg)',
        'url(./images/image8.jpg)',
        
    ]
    const bg=images[Math.floor(Math.random()*images.length)]
    console.log(bg)
    mother.style.background=' linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3))',bg
    
    
    
    container.style.background=bg
    

}
setInterval(changebg,6000)*/


// creating the date
const date = new Date();
const day = date.getDay();
const daytime = date.getHours();
const minutes = date.getMinutes();
const month = date.getMonth();
const year = date.getFullYear();
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

console.log(date);
const weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thurday",
  "friday",
  "surtaday",
];

console.log(` ${weekdays[day]}`);
console.log(`${months[month]}`);

// what happens after the submit button is clicked

const searchDat = search.addEventListener("click", function () {
  const input = document.querySelector(".input").value;

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=4f77a865b7374d6eae2100748222812&q=${input}&aqi=no`
  )
    .then((data) => {
      return data.json();
    })
    .then((completeData) => {
      console.log(completeData.current.condition.icon);

      city.innerHTML = `${completeData["location"].name} ,<span class="country"> ${completeData["location"].country}</span> `;
      time.innerHTML = `${daytime}:${minutes}-${weekdays[day]},${day}${months[month]} ${year},`;
      const image = document.createElement("img");
      image.src = `${completeData.current.condition.icon}`;

      imageContainer.appendChild(image);
      degree.innerHTML = ` ${completeData.current.temp_c} <span class="celcius"> °</span> c`;
      desc.innerHTML = `${completeData.current.condition.text}`;
      windspeed.innerHTML = ` wind speed           <span class ="detailjs"> ${completeData.current.wind_kph}</span> Km/Hr`;
      cloud.innerHTML=`       Cloud cover          <span class ="detailjs"> ${completeData.current.cloud}</span> % `
      humid.innerHTML=`       humidity             <span class ="detailjs"> ${completeData.current.humidity}</span>`
    });
    imageContainer.innerHTML=""
    input.innerHTML=''
});

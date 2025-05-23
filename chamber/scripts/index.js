let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
})
document.getElementById("currentYear").textContent = `©${currentYear}`;
document.getElementById("lastModified").textContent = ` Last Modification: ${lastModified}`;

function toggleActive(element) {
    element.classList.toggle('active');
}



const currentTemp = document.querySelector('#current-temp');
const futureTemp = document.querySelector('#future-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "436f256a4fa6f4b3d25106ea6d7a387a";
const myLat = "19.043700";
const myLong = "-98.199085";




const myURLtoday = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

/*const myURLfuture = `api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}`;*/

async function apiFetch() {
    try {
        const response = await fetch(myURLtoday);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

/*async function apiFetchFuture() {
    try {
        const response = await fetch(myURLfuture);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

    apiFetchFuture();
}*/
function displayResultsFuture(data) {
    futureTemp.innerHTML = `${data.main.temp}&deg;F`;
}


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();


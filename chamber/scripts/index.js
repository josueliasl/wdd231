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

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch();


const myURLfuture = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function apiFetchFuture() {
    try {
        const response = await fetch(myURLfuture);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResultsFuture(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}
apiFetchFuture();
function displayResultsFuture(data) {
    const noonForecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    futureTemp.innerHTML = noonForecast.slice(0, 3).map(item => {
        const date = new Date(item.dt_txt);
        const day = date.toLocaleDateString("en-US", { weekday: "long" });
        const temp = item.main.temp;
        return `<p>${day}: ${temp}°C</p>`;
    }).join('');
}

const businessInfoCard = document.querySelector('.businessInfoCard');
let businesses = [];
const url = 'data/home-members.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    businesses = data.business; // temporary testing of data response
    renderGrid();
}
getBusinessData();

function renderGrid() {
    businessInfoCard.className = 'bussCard';
    businessInfoCard.innerHTML = '';
    businesses.forEach(business => {
        const busCard = document.createElement('div');
        busCard.className = 'busCard';

        const icon = document.createElement('img');
        icon.src = `images/${business.icon}`;
        icon.alt = business.name;
        icon.width = 80;
        icon.height = 60;

        const name = document.createElement('h3');
        name.textContent = business.name;

        const tagLine = document.createElement('p');
        tagLine.textContent = business.tagLine;

        const phone = document.createElement('p');
        phone.innerHTML = business.phone;

        const website = document.createElement('p');
        website.innerHTML = business.website;

        const email = document.createElement('p');
        email.innerHTML = `Email: ${business.email}`;

        busCard.appendChild(icon);
        busCard.appendChild(name);
        busCard.appendChild(tagLine);
        busCard.appendChild(phone);
        busCard.appendChild(website);
        busCard.appendChild(email);
        businessInfoCard.appendChild(busCard);
    });
}



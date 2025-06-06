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

const placeCard = document.getElementById('places');
let places = [];
const url = 'data/place.json';

async function getPlaceData() {
    const response = await fetch(url);
    const data = await response.json();
    places = data.places;
    placeCards();
}
getPlaceData();

function placeCards() {
    placeCard.className = 'placeCard';
    placeCard.innerHTML = '';
    places.forEach(place => {
        const cardPlace = document.createElement('div');
        cardPlace.className = 'placeCardInfo';

        const image = document.createElement('img');
        image.src = `images/${place.photoURL}`;
        image.alt = place.name;
        image.width = 300;
        image.height = 200;
        image.loading = "lazy";

        const name = document.createElement('h3');
        name.textContent = place.name;

        const description = document.createElement('p');
        description.textContent = place.description;

        const address = document.createElement('p');
        address.textContent = place.address;

        const cost = document.createElement('p');
        cost.textContent = place.cost;

        cardPlace.appendChild(image);
        cardPlace.appendChild(name);
        cardPlace.appendChild(description);
        cardPlace.appendChild(address);
        cardPlace.appendChild(cost);
        placeCard.appendChild(cardPlace);
    });
};

let lastVisit = document.getElementById('visitMessage');

let visits = localStorage.getItem('lastVisit');
if (visits === null) {
    lastVisit.textContent = "Welcome! Let us know if you have any questions.";
    localStorage.setItem('lastVisit', Date.now())
}

else {
    let parsedVisits = parseInt(visits);

    const timestamp = Date.now();
    let passedTime = timestamp - parsedVisits;
    let daysNumber = Math.round(passedTime / 86400000);

    if (daysNumber === 0) {
        lastVisit.textContent = "Back so soon! Awesome!";
        localStorage.setItem('lastVisit', Date.now())
    }
    if (daysNumber === 1) {
        lastVisit.textContent = "You last visited 1 day ago.";
        localStorage.setItem('lastVisit', Date.now())
    }
    if (daysNumber >= 2) {
        lastVisit.textContent = `You last visited ${daysNumber} days ago.`;
        localStorage.setItem('lastVisit', Date.now())
    }
};
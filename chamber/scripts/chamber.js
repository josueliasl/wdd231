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
let businesses = [];
const url = 'data/members.json';

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    businesses = data.business; // temporary testing of data response
}

getBusinessData();

const container = document.getElementById('container');
const bgrid = document.getElementById('bgrid');
const blist = document.getElementById('blist');

function renderGrid() {
    container.className = 'grid';
    container.innerHTML = '';
    businesses.forEach(business => {
        const card = document.createElement('div');
        card.className = 'card';

        const icon = document.createElement('img');
        icon.src = `images/${business.icon}`;
        icon.alt = business.name;

        const name = document.createElement('h3');
        name.textContent = business.name;

        const description = document.createElement('p');
        description.textContent = business.description;

        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(description);
        container.appendChild(card);
    });
}

function renderList() {
    container.className = 'list';
    container.innerHTML = '';
    const ul = document.createElement('ul');
    businesses.forEach(business => {
        const li = document.createElement('li');
        li.innerHTML = `${business.name}<br>${business.address}<br>${business.phone}<br>${business.website}<br>${business.description}`;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
renderGrid();

bgrid.addEventListener('click', renderGrid);
blist.addEventListener('click', renderList);

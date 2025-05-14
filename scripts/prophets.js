const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    //console.table(data.prophets);  temp output test of data response 
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let placeOfBirth = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '140');
        portrait.setAttribute('height', '240');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(placeOfBirth); //fill in the blank
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

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

/* JOIN LEVELS FUNCTIONALITY */

const levels = [
    {
        level: "NP Membership Level",
        details: [
            "",
            "Non-Profit Organizations only",
            "No fee",
            "Access to directory",
            "Receive Chamber Newsletters",
            "Event Invitations (non-voting)"
        ]
    },
    {
        level: "Bronze Membership Level",
        details: [
            "",
            "Basic business listing",
            "Access to events",
            "Chamber newsletter subscription",
            "Networking opportunities"
        ]
    },
    {
        level: "Silver Membership Level",
        details: [
            "",
            "All Bronze benefits",
            "Quarterly social media spotlight",
            "Discounted event tickets",
            "Access to training resources"
        ]
    },
    {
        level: "Gold Membership Level",
        details: [
            "",
            "All Silver benefits",
            "Premium directory listing",
            "Featured placement on chamber homepage",
            "Free booth at annual business expo"
        ]
    }
];


createMembershipLevel(levels);



function createMembershipLevel(filteredlevels) {
    const levelsContainer = document.querySelector('.levels');
    levelsContainer.innerHTML = ""; // Clear the container at the start

    // Iterate over all levels and create cards
    filteredlevels.forEach(level => {
        let card = document.createElement('section');
        let levelHeader = document.createElement("h3");

        levelHeader.innerHTML = `${level.level}`;
        card.appendChild(levelHeader);
        card.addEventListener('click', () => {
            displaylevelDetails(level);
        });
        levelsContainer.appendChild(card);
    });
};


function displaylevelDetails(level) {
    const levelDetails = document.getElementById("level-details");
    levelDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${level.level}</h2>
    <ul>
    ${level.details.filter(item => item.trim() !== "").map(item => `<li>${item}</li>`).join('')}
    </ul>
    `;
    levelDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        levelDetails.close();
    });
    /*levelDiv.addEventListener('click', () => {
        displaylevelDetails(level);
    });*/
}




export let compilation = [];
export const url = 'data/stories.json';

export async function getStoryData(renderStory) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        compilation = data.stories;
        renderStory();
    } catch (error) {
        console.error("There is an error:", error);
    }
}

export function renderStory(container, displayStoryDetails) {
    container.className = 'storyCard';
    container.innerHTML = '';
    compilation.forEach(story => {
        const card = document.createElement('div');
        card.className = 'storyCardInfo';

        const fullName = document.createElement('h3');
        fullName.textContent = `${story.name} ${story.lastName}`;

        const mission = document.createElement('p');
        mission.innerHTML = story.mission;

        card.appendChild(fullName);
        card.appendChild(mission);
        container.appendChild(card);

        card.addEventListener('click', () => {
            displayStoryDetails(story);
        });
    });
}

export function displayStoryDetails(story, storyDetails) {
    storyDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${story.name} ${story.lastName}</h2>
    <h3>${story.mission}</h3>
    <p>${story.storyText}</p>
    `;
    localStorage.setItem("lastViewedStory", `${story.name} ${story.lastName}`);
    storyDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        storyDetails.close();
    });
}




import { getStoryData, renderStory, displayStoryDetails } from './stories.js';
import { menu } from './nav.js';
import { apiFetch } from './weather.js';
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('storiesContainer');
    const storyDetails = document.getElementById("story-details");

    getStoryData(() => renderStory(container, (story) => displayStoryDetails(story, storyDetails)));

    const lastStory = localStorage.getItem("lastViewedStory");
    if (lastStory) {
        console.log(`Would you like to continue reading ${lastStory}'s story?`)
    }

    apiFetch();
    menu();

});

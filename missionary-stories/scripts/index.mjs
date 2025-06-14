
import { getStoryData, renderStory, displayStoryDetails } from './stories.js';
import { menu } from './nav.js';
import { apiFetch } from './weather.js';
import { displaytimestamp, formAnswers } from './share.js';

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    if (path.includes("form.html")) {
        displaytimestamp();
    }
    if (path.includes("thankyou.html")) {
        formAnswers();
    }
    const container = document.getElementById('storiesContainer');
    const storyDetails = document.getElementById("story-details");

    getStoryData(() => renderStory(container, (story) => displayStoryDetails(story, storyDetails)));

    const lastStory = localStorage.getItem("lastViewedStory");
    if (lastStory) {
        alert(`Would you like to continue reading ${lastStory}'s story?`);
    }

    apiFetch();
    menu();

});

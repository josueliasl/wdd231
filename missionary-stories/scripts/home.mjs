import {renderStoryDetails, url } from "./stories.js";

export async function getBusinessData(container) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const randomSelection = data.business.sort(() => 0.5 - Math.random()).slice(0, 3);
        renderRandom(container, randomSelection, renderStoryDetails);
    } catch (error) {
        console.error("We found an error: ", error);
    }
}


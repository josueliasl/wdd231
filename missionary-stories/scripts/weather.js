export const currentTemp = document.querySelector('#current-temp');
export const weatherIcon = document.querySelector('#weather-icon');
export const captionDesc = document.querySelector('figcaption');

export const myKey = "436f256a4fa6f4b3d25106ea6d7a387a";
export const myLat = "40.76055773930673";
export const myLong = "-111.88817800675201";

export const myURLtoday = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

export async function apiFetch() {
    try {
        const response = await fetch(myURLtoday);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

export function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

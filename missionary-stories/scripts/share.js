const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Your name is: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Your mission was: ${myInfo.get('mission')} </p>
<p>Story: ${myInfo.get('story')} </p>
<p>${myInfo.get('timestamp')}</p>`;
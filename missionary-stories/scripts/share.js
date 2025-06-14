export function displaytimestamp() {
    const form = document.querySelector('form');
    const timestampInput = document.getElementById("timestamp")
    if (form && timestampInput){ 
    timestampInput.value = new Date().toISOString();

    form.addEventListener('submit', function () {
        timestampInput.value = new Date().toISOString();
    });
}
}
export function formAnswers(){
const myInfo = new URLSearchParams(window.location.search);
const results = document.querySelector('#results');

if(results){ 
results.innerHTML = `
<p>Your name is: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Your mission was: ${myInfo.get('mission')} </p>
<p>Story: ${myInfo.get('story')} </p>
<p>${myInfo.get('timestamp')}</p>`;
}}
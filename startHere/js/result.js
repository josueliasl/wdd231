window.addEventListener("DOMContentLoaded", () => {
    const myInfo = new URLSearchParams(window.location.search);

    const resultsHTML = `
    <p><strong>Appointment for:</strong> ${first} ${last}</p>
    <p><strong>Ordinance:</strong> Proxy ${ordinance}</p>
    <p><strong>Email:</strong> ${email}</p>
  `;

    document.querySelector('#results').innerHTML = resultsHTML;
});
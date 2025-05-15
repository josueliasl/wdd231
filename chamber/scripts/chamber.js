let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;
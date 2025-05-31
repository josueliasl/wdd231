const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Your data is: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Organizational Title: ${myInfo.get('organizationTitle')} </p>
<p>Organizational Name: ${myInfo.get('organizationName')} </p>
<p>Email: ${myInfo.get('email')}</p>
<p>Phone: ${myInfo.get('phone')}</p>
<p>Your level: ${myInfo.get('level')}</p>
<p>Description: ${myInfo.get('description')}</p>
`
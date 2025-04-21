// redirect.js
const localServer = 'http://<YOUR_LOCAL_SERVER_IP>/mediawiki/';
const path = window.location.pathname; // Get the current path

// Append the path to the local server URL
const redirectUrl = localServer + path.substring(1); // Remove the leading '/' from the path

// Redirect to the local server
window.location.href = redirectUrl;

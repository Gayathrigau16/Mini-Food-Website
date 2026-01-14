const locationInput = document.getElementById('locationInput');
const useLocationBtn = document.getElementById('useLocationBtn');
const output = document.getElementById('output');

useLocationBtn.addEventListener('click', () => {
    // Hide the button immediately
    useLocationBtn.style.display = 'none';

    if (navigator.geolocation) {     /* checks if the browser supports location services. */
        navigator.geolocation.getCurrentPosition(     /* tries to fetch the user's current location. */
            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                output.innerHTML = `📌 Your current location:<br>Latitude: ${lat}<br>Longitude: ${lon}`;
            },
            error => {
                output.textContent = "⚠️ Unable to retrieve your location.";
            }
        );
    } 
    else {
        output.textContent = "❌ Geolocation is not supported by your browser.";
    }
});

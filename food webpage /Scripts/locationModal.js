const locationModalHTML = `
    <div id="location-modal" class="location-modal">
        <div class="location-modal-content">
            <div class="modal-header">
                <span class="close-modal-button" id="close-location-modal">&times;</span>
            </div>
            <div id="map-container" class="map-container"></div>
        </div>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', locationModalHTML);

const locationModal = document.getElementById('location-modal');
const closeLocationModal = document.getElementById('close-location-modal');

// Close modal
closeLocationModal.addEventListener('click', function () {
    locationModal.style.display = 'none';
});

// Open modal - load Maps
function openLocationModal(location) {
    if (!location) {
        console.error("Location data is missing.");
        return;
    }

    const [latitude, longitude] = location.split(",");
    const mapContainer = document.getElementById('map-container');
    mapContainer.innerHTML = '';

    // Remove duplicate loads
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
        existingScript.remove();
    }

    // Add Google Maps API script with required async loading for some reason
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD8zmWuNUg24ypviCvAWWL8rifJxPf3HN0&libraries=marker&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Define initMap
    window.initMap = async function () {
        const map = new google.maps.Map(mapContainer, {
            center: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
            zoom: 15,
            mapId: 'DEMO_MAP_ID',
        });
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        new AdvancedMarkerElement({
            position: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
            map: map,
            title: "Location",
        });
    };
    document.body.appendChild(script);
    const locationModal = document.getElementById('location-modal');
    locationModal.style.display = 'block';
}

// Close modal when outside click
window.onclick = function (event) {
    if (event.target === locationModal) {
        locationModal.style.display = 'none';
    }
};
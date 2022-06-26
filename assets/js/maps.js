function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        },
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "",
        disableAutoPan: true,
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTVWXYZ";

    // Add some markers to the map.
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
            position,
            label,
        });

        // markers can only be keyboard focusable when they have click listeners
        // open info window when marker is clicked
        marker.addListener("click", () => {
            infoWindow.setContent(label);
            infoWindow.open(map, marker);
        });
        return marker;
    });

    // Add a marker clusterer to manage the markers.
    const markerCluster = new markerClusterer.MarkerClusterer({
        map,
        markers
    });
}

const locations = [{
        lat: 40.785091,
        lng: -73.968285
    },
    {
        lat: 41.084045,
        lng: -73.874245
    },
    {
        lat: 40.754932,
        lng: -73.984016
    }
];

window.initMap = initMap;
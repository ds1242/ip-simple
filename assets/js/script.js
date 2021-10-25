let mymap = L.map('mapid').setView([0,0], 1);
let marker = L.marker([0,0]).addTo(mymap);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);



// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


const getGeoLoc = () => {
    let IP_API_KEY = 'at_yUzZqyZxjOKGmxpY3ajwM0wejSj6J';
    const geoApiUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=' + IP_API_KEY + '&ipAddress=';
    console.log(geoApiUrl);
    
    fetch(geoApiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    // position = [data.location.lat, data.location.lng]
        mymap.flyTo(new L.LatLng(data.location.lat, data.location.lng), 13);
        marker.setLatLng([data.location.lat, data.location.lng]);
    })
    .catch(function(error){
        console.log(error);
    })
};


window.onload = (event) => {
    console.log('page is fully loaded');
    getGeoLoc();
};

// mymap.on('click', getGeoLoc);
// Setup map required items
let mymap = L.map('mapid').setView([0,0], 1);
let marker = L.marker([0,0]).addTo(mymap);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
const searchIP = (event) => {
    event.preventDefault();
    let searchVal = document.getElementById('search').value;
    console.log(searchVal);
    getGeoLoc(searchVal);
};

const getGeoLoc = (ipInput) => {
    // take IP address in if a user enters one
    let ipAddress = ipInput;
    // setup API call URL
    let IP_API_KEY = 'at_yUzZqyZxjOKGmxpY3ajwM0wejSj6J';
    const geoApiUrl = 'https://geo.ipify.org/api/v2/country,city?apiKey=' + IP_API_KEY + '&ipAddress=' + ipAddress;
    
    // Make API call
    fetch(geoApiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // update map and move map to IP location
        mymap.flyTo(new L.LatLng(data.location.lat, data.location.lng), 13);
        marker.setLatLng([data.location.lat, data.location.lng]);
        // add information to boxes to display
        let addressDiv = document.getElementById('address');
        addressDiv.innerHTML = data.ip;

        let city = data.location.city;
        let region = data.location.region;
        let zipcode = data.location.postalCode;
        let locationDiv = document.getElementById('location');
        locationDiv.innerHTML = city + ', ' + region + ' ' + zipcode;

        let timeZone = data.location.timezone;
        let timeZoneDiv = document.getElementById('timezone');
        timeZoneDiv.innerHTML = timeZone;

        let ISP = data.isp;
        let ispDiv = document.getElementById('isp');
        ispDiv.innerHTML = ISP;


    })
    // error catch 
    .catch(function(error){
        console.log(error);
    })


};

// trigger on load to search for current user's ip and location
window.onload = (event) => {
    let ip = '';
    getGeoLoc(ip);
};

// event listener to trigger search 
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchIP);

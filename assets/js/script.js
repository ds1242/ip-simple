// const { data } = require("jquery");

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
    
    // fetch(geoApiUrl)
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(data){
    //     console.log(data);
    //     mymap.flyTo(new L.LatLng(data.location.lat, data.location.lng), 13);
    //     marker.setLatLng([data.location.lat, data.location.lng]);

    //     let addressDiv = document.getElementById('address');
    //     addressDiv.append(data.ip)

    //     let city = data.location.city;
    //     let region = data.location.region;
        // let zipcode = data.location.postalCode;
    //     let locationDiv = document.getElementById('location');
    //     locationDiv.append(city + ', ' + region + ' ' + zipcode);

    //     let timeZone = data.location.timezone;
    //     let timeZoneDiv = document.getElementById('timezone');
    //     timeZoneDiv.append(timeZone);

    //     let ISP = data.isp;
    //     let ispDiv = document.getElementById('isp');
    //     ispDiv.append(ISP);


    // })
    // .catch(function(error){
    //     console.log(error);
    // })
    let lat = 40.61106;
    let lng = -111.89994;
    let ip = '192.212.174.101';
    let city = "Midvale";
    let region = "Utah";
    let timeZone = "-06:00";
    let ISP = "Comcast";
    mymap.flyTo(new L.LatLng(lat, lng), 13);
    marker.setLatLng([lat, lng]);

    let addressDiv = document.getElementById('address');
    addressDiv.append(ip);

    let locationDiv = document.getElementById('location');
    locationDiv.append(city + ', ' + region);

    let timeZoneDiv = document.getElementById('timezone');
    timeZoneDiv.append('UTC ' + timeZone);

    let ispDiv = document.getElementById('isp');
    ispDiv.append(ISP);

};


window.onload = (event) => {
    console.log('page is fully loaded');
    getGeoLoc();
};

// mymap.on('click', getGeoLoc);
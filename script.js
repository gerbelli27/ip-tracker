

lati = 50;
long = 50;

const map = L.map('map').setView([lati, long], 13);
            var marker = L.marker([lati, long]).addTo(map);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 22,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZWR1YXJkb2dlcmJlbGxpIiwiYSI6ImNremJ0dW1leDFzajcybm45YThqcmU3ZnIifQ.YdCeY7xUU8siCzO7dWBDzw'
}).addTo(map);

updatePosition = (updatePosition) => {
    map.setView(updatePosition, 13)
    L.marker(updatePosition).addTo(map);
}

//API ipify

var ip = "";
var api_key = "at_VbLAcOoP4YtKGUjAPYKo4e1BLJnwv";
$(function () {
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: ip},
        success: function(data) {
            
            ip = data.ip;
           
            updatePosition([data.location.lat, data.location.lng])
            document.querySelector("#out-ip").innerHTML = ip;
            
        }
    });
 });


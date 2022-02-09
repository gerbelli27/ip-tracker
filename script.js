var search = document.querySelector("#input-search");
var value = search.value
var ip = ""
var api_key = "at_CB9Q0AURWleU7KQ67SOGa5XOHbUPP";
$(function () {
    $.ajax({
        url: "https://geo.ipify.org/api/v1",
        data: { apiKey: api_key, ipAddress: ip, domain: value },
        success: function (data) {
            ip = data.ip;
            isp = data.isp;
            city = data.location.city;
            region = data.location.region;
            country = data.location.country;
            time = data.location.timezone;
            document.querySelector("#ma").innerHTML = '<div id="map"> </div>';
            document.querySelector("#out-ip").innerHTML = ip;
            document.querySelector("#out-city").innerHTML = city;
            document.querySelector("#out-time").innerHTML = "UTC" + time;
            document.querySelector("#out-isp").innerHTML = isp;
            updatePosition([data.location.lat, data.location.lng])
        }
    });
});

const searchDomain = (event) => {
    event.preventDefault()
    var search = document.querySelector("#input-search");
    var value = search.value
    var ip = ""
    var api_key = "at_CB9Q0AURWleU7KQ67SOGa5XOHbUPP";
    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: { apiKey: api_key, ipAddress: ip, domain: value },
            success: function (data) {
                updatePosition([data.location.lat, data.location.lng])
                ip = data.ip;
                isp = data.isp;
                city = data.location.city;
                region = data.location.region;
                country = data.location.country;
                time = data.location.timezone;

                document.querySelector("#out-ip").innerHTML = ip;
                document.querySelector("#out-city").innerHTML = city;
                document.querySelector("#out-time").innerHTML = "UTC" + time;
                document.querySelector("#out-isp").innerHTML = isp;
            }
        });
    });

}

const button = document.querySelector('#button');
button.addEventListener('click', searchDomain)

//MAP//

var newIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [38, 47], // size of the icon
    iconAnchor: [18, 46], // point of the icon which will correspond to marker's location
});

updatePosition = (updatePosition) => {
    document.querySelector("#ma").innerHTML = '<div id="map"> </div>';
    const map = L.map('map').setView(updatePosition, 13);
    var marker = L.marker(updatePosition, { icon: newIcon }).addTo(map);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 22,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZWR1YXJkb2dlcmJlbGxpIiwiYSI6ImNremJ0dW1leDFzajcybm45YThqcmU3ZnIifQ.YdCeY7xUU8siCzO7dWBDzw'
    }).addTo(map);
}

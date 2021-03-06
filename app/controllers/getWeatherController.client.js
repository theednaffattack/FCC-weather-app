'use strict';

(function() {


    var weatherInfo = document.querySelector('#weather-info');
    var weatherCity = document.querySelector('#weather-city');
    var weatherTempF = document.querySelector('#weather-temp');
    var weatherDesc = document.querySelector('#weather-desc');
    var weatherImage = document.querySelector('#weather-image');
    var iconGraphic = document.querySelector('#icon-graphic');
    var cityName = document.querySelector('#city-name');

    var userLocation = navigator.geolocation;
    var userLat = '';
    var userLong = '';
    var weatherApiPartial = 'http://api.openweathermap.org/data/2.5/weather?lat=';
    var geoLookupApiPartial = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    var geoLookupApiKey = 'AIzaSyAwkBM4FYaENbyryxmCh732C7OJg3JS7h0';
    // Google Sample API Call:
    // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAwkBM4FYaENbyryxmCh732C7OJg3JS7h0

    // get the user's current location
    // if (navigator.geolocation) {
    //      navigator.geolocation.getCurrentPosition(function(position) {
    //     userLat = position.coords.latitude; //$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    //     userLong = position.coords.longitude;
    //   });
    // }

    var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + userLat + '&lon=' + userLong + '&appid=ea980062829f19db9775cd9d13540204';


    if (userLocation) {
        userLocation.getCurrentPosition(function(position) {
            userLat = position.coords.latitude;
            userLong = position.coords.longitude;
            console.log('Lat: ' + userLat + ' long: ' + userLong);

            cityName.innerHTML = city;
        });
    }

    var geoLookupApiUrl = geoLookupApiPartial + userLat + ',' + userLong + '&key=' + geoLookupApiKey;


    function ready(fn) {
        if (typeof fn !== 'function') {
            return;
        }

        if (document.readyState === 'complete') {
            return fn();
        }

        document.addEventListener('DOMContentLoaded', fn, false);
    }

    function ajaxRequest(method, url, callback) {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                callback(xmlhttp.response);
            }
        };

        xmlhttp.open(method, url, true);
        xmlhttp.send();
    }

    // geoLookup function to find the city
    function getCityName(data) {

        var cityObject = JSON.parse(data);

        var city = cityObject.results[0].address_components[3].long_name;


    }

    function getLocalWeather(data) {
        // do stuff
        var weatherObject = JSON.parse(data);

        // var weatherIcons = JSON.parse(weatherIconsJson);

        // add weather icons
        var prefix = 'wi-';
        var code = weatherObject.weather[0].id;
        var icon = weatherIconsJson[code].icon;
        var tempF = Math.round(weatherObject.main.temp * (9 / 5) - 459.67);
        var tempC = weatherObject.main.temp - 273.15;

        // If we are not in the ranges mentioned above, add a day/night prefix.
        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
        }

        // Finally tack on the prefix.
        icon = prefix + icon;

        weatherCity.innerHTML = weatherObject.name;
        weatherTempF.innerHTML = tempF + '&deg;';
        // weatherTempC.innerHTML = tempC;
        // weatherImage.innerHTML = weatherObject;

        iconGraphic.classList.add(icon);
    }
    
    ready(ajaxRequest('GET', geoLookupApiUrl, getCityName))
        // ready(ajaxRequest('GET', weatherApiUrl, getLocalWeather))

})();

navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });

function onSuccess(position) {
    if (position.coords) {
        let lat = position.coords.latitude,
            lng = position.coords.longitude,

            //Google Maps
            myLatlng = new google.maps.LatLng(lat, lng),
            mapOptions = { zoom: 3, center: myLatlng },
            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),
            marker = new google.maps.Marker({ position: myLatlng, map: map });
    }
}

function onError(error) {
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

google.maps.event.addDomListener(window, 'load', onSuccess);
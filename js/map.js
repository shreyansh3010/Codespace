window.marker = null;

function initialize() {
    var map;
    var latitude = 0; //initialize with latitude
    var longitude = 0; //initialize with longitude
    var locationPoint = new google.maps.LatLng(12.971000, 79.163666);
    var style = [{
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
            "saturation": 1
        }, {
            "gamma": 1
        }, {
            "visibility": "on"
        }, {
            "hue": "#fdc398"
        }]
    }, {
        "elementType": "geometry",
        "stylers": [{
            "saturation": -100
        }]
    }];
    var mapOptions = {
        // SET THE CENTER
        center: locationPoint,

        // SET THE MAP STYLE & ZOOM LEVEL
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 15,

        // SET THE BACKGROUND COLOUR
        backgroundColor: "#eeeeee",

        // REMOVE ALL THE CONTROLS EXCEPT ZOOM
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        overviewMapControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        }
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // SET THE MAP TYPE
    var mapType = new google.maps.StyledMapType(style, {
        name: "Grayscale"
    });
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');

    //CREATE A CUSTOM PIN ICON
    var marker_image = 'social_icon/pin.png'; //Replace with the path to pin image
    var pinIcon = new google.maps.MarkerImage(marker_image, null, null, null, new google.maps.Size(50, 50));

    marker = new google.maps.Marker({
        position: locationPoint,
        map: map,
        icon: pinIcon,
        title: 'VIT University, Vellore' //Replace with the Name of Location
    });
}
google.maps.event.addDomListener(window, 'load', initialize);




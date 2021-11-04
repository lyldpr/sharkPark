const firebaseConfig = {
    apiKey: "AIzaSyA-Cm528w-sxWkeP6TxFWFDQ4AbqP1q31I",
    authDomain: "sharkpark-9b579.firebaseapp.com", 
    projectId: "sharkpark-9b579", 
    storageBucket: "sharkpark-9b579.appspot.com",
    messagingSenderId: "565602639536",
    appId: "1:565602639536:web:3771ee87e03643b6db2575",
    measurementId: "G-ZM3JYBW45T"
};

let map;
//function initMap() {
//  map = new google.maps.Map(document.getElementById("map"), {
//    center: { lat: 32.780925, lng: -79.935150 },
//    zoom: 14,
//  });
//}
//if ($("#map").length > 0) {
    
        function initMap() {
        
        //var address;
        //var lat;
        //var long;
        //db.collection("spots").get().then((querySnapshot) => {
        //    querySnapshot.forEach((doc) => {
        //        address.textContent = doc.data().address;
        //        lat.textContent = doc.data().latitude;
        //        long.textContent = doc.data().longitude;
        //    });
        //})
        //.catch((error) => {
        //    console.log("Error getting documents: ", error);
        //});

        

        var locations = [
            //[address,lat,long]
            ['testing1', 32.779571,-79.944628, 2],
            ['testing2', 32.774483,-79.928781, 1]
        ];

        var map = new google.maps.Map(document.getElementById("map"), {
            //center: { lat: 32.780925, lng: -79.935150 },
            zoom: 14,
            center: new google.maps.LatLng(32.780925,-79.935150),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        var marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
        });            

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }

        //var styles = [
        //    {"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}      
        //];

        //map.setOptions({styles: styles});            

    }
    
    initMap();
//}
  
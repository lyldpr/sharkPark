const firebaseConfig = {
    apiKey: "AIzaSyBktSIE9SmOZV50CHGXe4vF8fBiUl7qHr8",
    authDomain: "sharkpark-9b579.firebaseapp.com", 
    projectId: "sharkpark-9b579", 
    storageBucket: "sharkpark-9b579.appspot.com",
    messagingSenderId: "565602639536",
    appId: "1:565602639536:web:3771ee87e03643b6db2575",
    measurementId: "G-ZM3JYBW45T"
};

firebase.initializeApp({
    apiKey: "AIzaSyBktSIE9SmOZV50CHGXe4vF8fBiUl7qHr8",
    authDomain: "sharkpark-9b579.firebaseapp.com", 
    projectId: "sharkpark-9b579", 
});

const db = firebase.firestore();

let map;

/**
 * 
 * @returns {(string | number)[][]}
 */
async function createItems() {
    var count = 1;

    /**
     * 
     * @type {(string | number)[][]}
     */
    var finalTest = [[]];
    let item;
    
    spots = db.collection("spots").get();
    const querySnapshot = await db.collection("spots").get()
    
    querySnapshot.forEach((doc) => {
        item = [String(doc.data().address), Number(doc.data().latitude), Number(doc.data().longitude), count]
        finalTest.push(item)
        count++;
    });
    finalTest.shift()
    return finalTest
}

async function initMap() {
    
    /**
    * 
    * @type {(string | number)[][]}
    */
    let locationsList = await createItems();

    var map = new google.maps.Map(document.getElementById("map"), {
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

    for (i = 0; i < locationsList.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locationsList[i][1], locationsList[i][2]),
            map: map,
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function() {
                infowindow.setContent(locationsList[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
initMap();
  
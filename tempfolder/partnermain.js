const address = document.getElementById('address');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const price = document.getElementById('price');
const time = document.getElementById('time');
const distance = document.getElementById('distance');

const spot = document.getElementById('spot');

const auth = firebase.auth(); 

function signOut(){
    auth.signOut();
}

spot.addEventListener('click', ()=>{
    db.collection('spots').add({
        address: address.value,
        latitude: latitude.value,
        longitude: longitude.value,
        price: price.value,
        time: time.value,
        distance: distance.value
    });
    address.value = '';
    latitude.value = '';
    longitude.value = '';
    price.value = '';
    time.value = '';
    distance.value = '';
})


auth.onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
      window.location.href="index.html";
    }
})
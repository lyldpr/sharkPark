const address = document.getElementById('address');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');

const spot = document.getElementById('spot');

const auth = firebase.auth(); 

function signOut(){
    auth.signOut();
}

spot.addEventListener('click', ()=>{
    db.collection('spots').add({
        address: address.value,
        latitude: latitude.value,
        longitude: longitude.value
    });
    address.value = '';
    latitude.value = '';
    longitude.value = '';
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
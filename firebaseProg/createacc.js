const firebaseConfig = {
    apiKey: "AIzaSyA-Cm528w-sxWkeP6TxFWFDQ4AbqP1q31I",
    authDomain: "sharkpark-9b579.firebaseapp.com", 
    projectId: "sharkpark-9b579", 
    storageBucket: "sharkpark-9b579.appspot.com",
    messagingSenderId: "565602639536",
    appId: "1:565602639536:web:3771ee87e03643b6db2575",
    measurementId: "G-ZM3JYBW45T"
};

const usernameParker = document.getElementById('usernameParker');
const licenseDrivers = document.getElementById('licenseDrivers');
const licensePlate = document.getElementById('licensePlate');
const parkerInfo = document.getElementById('parkerInfo');

const usernamePartner = document.getElementById('usernamePartner');
const locationLot = document.getElementById('locationLot');
const registration = document.getElementById('registration');
const partnerInfo = document.getElementById('partnerInfo');

const parker = document.getElementById('parker');
const partner = document.getElementById('partner');

const auth = firebase.auth(); 
//sign out function


function signOut(){
    auth.signOut();
}


parker.addEventListener('click', ()=>{
    db.collection('parkers').add({
        usernameParker: usernameParker.value,
        licenseDrivers: licenseDrivers.value,
        licensePlate: licensePlate.value,
        parkerInfo: parkerInfo.value
    });

    usernameParker.value = '';
    licenseDrivers.value = '';
    licensePlate.value = '';
    parkerInfo.value = '';
})

partner.addEventListener('click', ()=>{
    db.collection('partners').add({
        usernamePartner: usernamePartner.value,
        locationLot: locationLot.value,
        registration: registration.value,
        partnerInfo: partnerInfo.value
    });
    usernamePartner.value = '';
    locationLot.value = '';
    registration.value = '';
    partnerInfo.value = '';
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

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

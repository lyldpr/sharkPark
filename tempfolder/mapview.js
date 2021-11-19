const firebaseConfig = {
    apiKey: "AIzaSyA-Cm528w-sxWkeP6TxFWFDQ4AbqP1q31I",
    authDomain: "sharkpark-9b579.firebaseapp.com", 
    projectId: "sharkpark-9b579", 
    storageBucket: "sharkpark-9b579.appspot.com",
    messagingSenderId: "565602639536",
    appId: "1:565602639536:web:3771ee87e03643b6db2575",
    measurementId: "G-ZM3JYBW45T"
};

const auth = firebase.auth(); 

function signOut(){
    auth.signOut();
}
/*
db.collection("spots").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    let li = document.createElement("li");
    let address = document.createElement("h4");
    let latitude = document.createElement("p");
    let longitude = document.createElement("p");

    address.textContent = doc.data().address;
    latitude.textContent = doc.data().latitude;
    longitude.textContent = doc.data().longitude;

    li.appendChild(address);
    li.appendChild(latitude);
    li.appendChild(longitude);

    lists.appendChild(li);
  });
})
.catch((error) => {
  console.log("Error getting documents: ", error);
});
*/

auth.onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
      window.location.href="index.html";
    }
})
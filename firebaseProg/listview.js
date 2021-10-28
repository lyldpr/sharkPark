const lists = document.getElementById("lists");

const auth = firebase.auth(); 

function signOut(){
    auth.signOut();
}

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

  
auth.onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
      window.location.href="index.html";
    }
})
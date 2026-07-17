import { db, auth } from "./firebase.js";

import { doc, setDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


document.getElementById("saveProfile").onclick = async () => {

const user = auth.currentUser;

if (!user) {
alert("Login first");
return;
}

await setDoc(doc(db,"users",user.uid),{

name: document.getElementById("name").value,

age: document.getElementById("age").value,

location: document.getElementById("location").value,

bio: document.getElementById("bio").value,

email: user.email

});


alert("Profile saved ❤️");

window.location.href="dashboard.html";

};
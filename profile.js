import { auth, db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const saveButton = document.getElementById("saveProfile");

onAuthStateChanged(auth, (user) => {

  if (!user) {
    alert("Please log in first.");
    window.location.href = "login.html";
    return;
  }

  saveButton.addEventListener("click", async () => {

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const location = document.getElementById("location").value.trim();
    const bio = document.getElementById("bio").value.trim();

    if (!name || !age || !location || !bio) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await setDoc(doc(db, "users", user.uid), {
        name,
        age,
        location,
        bio,
        email: user.email,
        updatedAt: new Date().toISOString()
      });

      alert("Profile saved successfully ❤️");
      window.location.href = "dashboard.html";

    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }

  });

});
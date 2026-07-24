import { auth, db } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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

    saveButton.disabled = true;
    saveButton.textContent = "Saving...";

    try {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name: name,
        age: Number(age),
        location: location,
        bio: bio,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }, { merge: true });

      alert("Profile saved successfully ❤️");
      window.location.href = "dashboard.html";

    } catch (error) {
      console.error(error);
      alert("Failed to save profile: " + error.message);

    } finally {
      saveButton.disabled = false;
      saveButton.textContent = "Save Profile";
    }
  });
});
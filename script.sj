import { db, auth } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("saveBtn").addEventListener("click", async () => {
  if (!auth.currentUser) {
    alert("Please log in first.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const lookingFor = document.getElementById("lookingFor").value;
  const country = document.getElementById("country").value.trim();

  if (!name || !age || !gender || !lookingFor || !country) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      name,
      age: Number(age),
      gender,
      lookingFor,
      country,
      email: auth.currentUser.email
    }, { merge: true });

    alert("✅ Profile saved!");
  } catch (error) {
    alert("Error: " + error.message);
  }
});
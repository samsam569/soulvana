import { db, auth } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("saveBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  await setDoc(doc(db, "users", auth.currentUser.uid), {
    name: name,
    email: auth.currentUser.email
  });

  alert("Profile saved!");
});
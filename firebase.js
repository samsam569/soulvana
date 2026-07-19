<script type="module">
import { auth, db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const photoInput = document.getElementById("photo");
const preview = document.getElementById("preview");
const saveButton = document.getElementById("saveProfile");

photoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (ev) => {
    preview.src = ev.target.result;
    preview.style.display = "block";
  };
  reader.readAsDataURL(file);
});

saveButton.addEventListener("click", async () => {
  const user = auth.currentUser;

  if (!user) {
    alert("Please log in first.");
    window.location.href = "login.html";
    return;
  }

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;
  const lookingFor = document.getElementById("lookingFor").value;
  const location = document.getElementById("location").value.trim();
  const bio = document.getElementById("bio").value.trim();
  const photoFile = photoInput.files[0];

  if (!name || !age || !gender || !lookingFor || !photoFile) {
    alert("Please fill in all required fields.");
    return;
  }

  saveButton.disabled = true;
  saveButton.textContent = "Saving...";

  const reader = new FileReader();

  reader.onload = async (e) => {
    try {
      await setDoc(doc(db, "users", user.uid), {
        name,
        age: Number(age),
        gender,
        lookingFor,
        location,
        bio,
        email: user.email,
        photo: e.target.result,
        createdAt: new Date().toISOString()
      });

      alert("Profile saved successfully! ❤️");
      window.location.href = "matches.html";
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
      saveButton.disabled = false;
      saveButton.textContent = "Save Profile";
    }
  };

  reader.readAsDataURL(photoFile);
});
</script>
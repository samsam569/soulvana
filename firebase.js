<script type="module">
import { auth, db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("photo").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      document.getElementById("preview").src = ev.target.result;
      document.getElementById("preview").style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("saveProfile").addEventListener("click", async () => {
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
  const photoFile = document.getElementById("photo").files[0];

  if (!name || !age || !gender || !lookingFor || !photoFile) {
    alert("Please fill all required fields.");
    return;
  }

  const reader = new FileReader();

  reader.onload = async (e) => {
    try {
      await setDoc(doc(db, "users", user.uid), {
        name,
        age,
        gender,
        lookingFor,
        location,
        bio,
        photo: e.target.result,
        email: user.email
      });

      alert("Profile saved successfully! ❤️");
      window.location.href = "matches.html";
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  };

  reader.readAsDataURL(photoFile);
});
</script>
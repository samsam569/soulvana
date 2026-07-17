document.getElementById("saveBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;

  localStorage.setItem("profileName", name);

  alert("Profile saved!");
});
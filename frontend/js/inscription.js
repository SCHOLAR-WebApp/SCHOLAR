const form = document.querySelector("#form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const Username = form.elements.username.value;
  const phone = form.elements.num.value;
  const role = form.elements.role.value;
  const Password = form.elements.password.value;

  console.log("username :", Username);
  console.log("Password :", Password);
  console.log("role:", role);
  console.log("phone :", phone);
  alert("USERNAME="+Username+"\npassword="+Password+"\nrole="+role+"\nphone="+phone) 
}); 


document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche la soumission automatique du formulaire
  const formData = new FormData(event.target); // Récupère les données du formulaire
  fetch("/api/form", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});

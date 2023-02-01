// var Username;
// var Password;
// const form = document.querySelector("#form");
// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   Username = form.elements.username.value;
//   Password = form.elements.password.value;

//   console.log("Email :", Username);
//   console.log("Password :", Password);

 
 

 
// });




// function redirect() {
//   if(Username !='' && Password!=''){
//     window.location.href='../auth/accueil.html';;
//   }
//   else{
//     alert("Veillew remplir tous les champs");
//   }
//   // if(Username !='' && Password!=''){
//   //   window.location.href='SCHOLAR\frontend\html\auth\accueil.html'
//   // }
// }




document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche la soumission automatique du formulaire
  const formData = new FormData(event.target); // Récupère les données du formulaire
  console.log(formData);
  fetch("/api/form", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});


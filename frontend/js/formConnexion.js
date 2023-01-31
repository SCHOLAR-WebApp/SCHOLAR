var Username;
var Password;
const form = document.querySelector("#form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  Username = form.elements.username.value;
  Password = form.elements.password.value;

  console.log("Email :", Username);
  console.log("Password :", Password);

 
 

 
});




function redirect() {
  if(Username !='' && Password!=''){
    window.location.href='../auth/accueil.html';;
  }
  else{
    alert("Veillew remplir tous les champs");
  }
  // if(Username !='' && Password!=''){
  //   window.location.href='SCHOLAR\frontend\html\auth\accueil.html'
  // }
}


const button = document.getElementById("btn");
// Add an eventlistener and a function
button.addEventListener("click", myFunction);

function myFunction() {
  let allFilled = true;

  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let firstText = document.getElementById("alertTextFirstName");
  let lastText = document.getElementById("alertTextLastName");
  let emailText = document.getElementById("alertTextEmail");
  let passwordText = document.getElementById("alertTextPassword");
  let firstImage = document.getElementById("alertImageFirstName");
  let lastImage = document.getElementById("alertImageLastName");
  let emailImage = document.getElementById("alertImageEmail");
  let passwordImage = document.getElementById("alertImagePassword");

  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if (firstName === "") {
    allFilled = false;
    firstText.innerHTML = "First name cannot be empty";
    firstImage.style.display = "block";
  } 
if (lastName === "") {
    allFilled = false;
    lastText.innerHTML = "Last name cannot be empty";
    lastImage.style.display = "block";
  }
if (email === "") {
    allFilled = false;
    emailText.innerHTML = "Email cannot be empty";
    emailImage.style.display = "block";
}

  if (password === "") {
    allFilled = false;
    passwordText.innerHTML = "Password cannot be empty";
    passwordImage.style.display = "block";
  }

  if(allFilled){
    alert(`Thanks ${firstName} ${lastName} for enrolling!`);
    location.reload();
  }
}
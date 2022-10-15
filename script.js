const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

/* VALIDACION */

/* Correo */
const emailI=document.getElementById("mailI");
const emailR=document.getElementById("mailR");
emailI.addEventListener("input", 
  function(event){
    if(emailI.validity.typeMismatch){
      emailI.setCustomValidity("Ingresa una dirección de correo válida");
    }else{
      emailI.setCustomValidity("");
    }
  } );
  emailR.addEventListener("input", 
  function(event){
    if(emailR.validity.typeMismatch){
      emailR.setCustomValidity("Ingresa una dirección de correo válida");
    }else{
      emailR.setCustomValidity("");
    }
  });
/* contraseña 8+*/
const passR=document.getElementById("passR");

passR.addEventListener("input",
  function(event){
    if(passR.validity.tooShort){
      passR.setCustomValidity("La contraseña debe tener al menos 8 caracteres");
    }else{
      passR.setCustomValidity("");
    }
  });
  /* verificacion */
const verificacionR=document.getElementById("verificacionR");
verificacionR.addEventListener("input",
  function(event){
    if(verificacionR.value===passR.value){
      verificacionR.setCustomValidity("");
    }else{
      verificacionR.setCustomValidity("Las contraseñas deben coincidir");
    }
});
//how to avoid that the password and user appears in browser bar?


  // const form=document.getElementById("signup");
  // const emailR=document.getElementById("mailR");
  // const emailError=document.querySelector("#mail + span.error");

  // emailR.addEventListener("input",
  // function(event){
  //   if(emailR.validity.valid){
  //     emailError.className ="error"
  //   }else{
  //     showError();
  //   }
  // });
  // form.addEventListener("submit",
  // function(event){
  //   if(!emailR.validity.valid){
  //     showError();
  //     event.preventDefault();
  //   }
  // });
  // function showError(){
  //   if (emailR.validity.valueMissing){
  //     emailError.textContent="Debe introducir una dirección de Correo Electrónico.";
  //   }else if (emailError.validity.typeMissmatch){
  //     emailError.textContent="Ingrese una dirección de correo electrónico válida";
  //   }
  //   emailError.className="error activo";
  // }


document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {console.log("button.button-menu-toggle")
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
function showAlert(){ alert('Hola esta es una Alerta desde javaScript en este curso aprendemos a hacer todo tipo de cosas como esta!');}
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
  
  if (!validateEmail(email)) {
    alert('Por favor ingrese correo electronico valido.');
  }
  else {
    alert('Correo electronico enviado correctamente.');
  }
}
function validatePassword(password) {
    const regex = /^(?=.*\d)[^\s@]{8,16}$/;
    return regex.test(password)
  }
  const passwordInput = document.getElementById("password");

function validateForm() {
  const password = passwordInput.value;

  if (!validatePassword(password)) {
    alert("La contraseña debe contener al menos un número y tener entre 8 y 16 caracteres.");
    return false;
  }
  else {
    alert('Contraseña enviada correctamente.');
  }
}

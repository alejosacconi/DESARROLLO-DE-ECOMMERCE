//creamos la función llamada login 
function Login() {
//capturo la info del input del email
let email = document.getElementById("email"). value;

//capturamos la info del password
let password = document.getElementById("Password"). value;
//imprimo el dato
console.log(email);

console.log(password);

//verificamos si el email y password son correctos
  if(email == "pepe@gmail.com" && password == "12345"){

    alert("¡Gracias por tu compra!");

    //redireccionamos a la página perfil.html
    location.href = "productos.html";
  }else{
    alert("email o password incorrectos");
    location.href ="error.html"
  }
  
  
  } 
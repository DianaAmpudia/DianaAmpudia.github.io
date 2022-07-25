import validator from './validator.js';

const botonValidar=document.getElementById("btnValidar")
const creditCardNumber= document.getElementById("cardNumber")
const mValido= document.getElementById("mensaje1")
const mValido2= document.getElementById("mensaje2")
const mInvalido= document.getElementById("mensaje1")
const mInvalido2= document.getElementById("mensaje2")

botonValidar.addEventListener("click",validarNumTarjeta);

function validarNumTarjeta() {

  if (creditCardNumber.value.length <= 12) {
    mInvalido.innerHTML="Por favor ingresa al menos 13 dígitos"
    mValido2.innerHTML= ""
  
    //Condicionales anidados
  
  } else if (validator.isValid(creditCardNumber.value)){
       mValido.innerHTML="TU TARJETA FUE VALIDADA CON EXITO."
       mValido2.innerHTML= "Puedes continuar con tu compra."
  
  
       creditCardNumber.value= validator.maskify(creditCardNumber.value);
   }
    else{
      mInvalido.innerHTML="TU TARJETA NO ES VALIDA"
      mInvalido2.innerHTML="Por favor verifica tu datos o ingresa otra tarjeta para poder continuar con tu compra."
  
      creditCardNumber.value= validator.maskify(creditCardNumber.value);
    }
  
  }
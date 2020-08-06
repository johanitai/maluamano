
//formulario con alerta de campo vacio
const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const password = document.querySelector("#password")



form.addEventListener("submit", (event) => {
	event.preventDefault()

if (email.value === "" || password.value === "") {
	if(email.value === "") {
		emailHelp.innerText ="Ingrese su correo!!! "
	}
		if (password.value === "" ) {
	passwordHelp.innerText = "Ingrese su password!!!"
		}

} else {

 form.submit();
}


})


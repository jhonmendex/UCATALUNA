const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
let userData =  {
	email: 'davidescorce03@gmail.com',
	password: '1234'
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if(userData.email === emailInput.value && userData.password === passwordInput.value) {
		alert(`BIENVENIDO!!! ${userData.email}`)
	}
})
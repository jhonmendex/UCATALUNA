const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
let userData =  {
	email: 'mpaz@gmail.com',
	password: '1234'
}

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if(userData.email === emailInput.value && userData.password === passwordInput.value) {
    	alert(`Pase al siguiente nivel ${userData.email}`)
	}
    else{
        alert(`Lo sentimos ${userData.email} la clave es incorrecta`)
    }
    
})
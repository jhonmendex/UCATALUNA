let btn = document.getElementById('btn');

btn.addEventListener('click',() =>{
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //alert("Bienvenido")
    console.log(`Your mail: `, email,`, Your Pass: `, password);
    
});



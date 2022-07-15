

document
.getElementById('registerButton')
.addEventListener('click', function(e){
    e.preventDefault();
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value

    const loginInfo = {
        email,
        password
    }
    // console.log(login)
    fetch("login", {
        method: 'POST', 
        body: JSON.stringify(loginInfo),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response =>response.json())
    .then(json =>{
        // console.log(json)
        // save to localstorage
        localStorage.setItem("loginToken", JSON.stringify(json) )
        location.href="/home"
    })
    
    
})
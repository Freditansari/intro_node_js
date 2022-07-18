let token = JSON.parse(localStorage.getItem("loginToken")) 


fetch("/homeContent", {
    method: 'GET', 
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': token.token
    },
   
})
.then(response =>response.json())
.then(json =>{
    document
    .getElementById("home-container")
    .innerHTML = json.result;
})
.catch(error =>{
    console.log("error :" + error)
})


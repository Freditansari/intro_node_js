fetch("/homeContent", {
    method: 'GET', 
   
})
.then(response =>response.json())
.then(json =>{
    document
    .getElementById("home-container")
    .innerHTML = json.result;
})


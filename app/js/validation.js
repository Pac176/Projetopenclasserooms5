let contact = { firstName: "gege", lastName: "dsfd", address: "fe", city: "fezfesd", email:"dfe" }
let products = []
let panier = {}
panier.products = []
let valid = []


for(let i = 0; i < localStorage.length; i++) {
     products[i] = localStorage.key(i)
 panier.products.push(JSON.parse(localStorage.getItem(products[i])))
}


let commandUser = { contact, products }
let nbArticles = document.querySelector(".nbArticles")
let importNbArticles = parseInt(sessionStorage.getItem("nombreitem"))
nbArticles.innerHTML = `Nombre d'article(s): ${importNbArticles}`
let totalCommand = document.querySelector(".totalCommande")
let importTotalCommand = parseInt(sessionStorage.getItem("total"))
totalCommand.innerHTML = `Nombre d'article(s): ${importTotalCommand}€`
let validCommand =document.querySelector(".validCommand")
let formControl = document.querySelectorAll(".form-control")
let feedBack = document.querySelectorAll(".feedback")

async function postData() {
     const validCommande = await fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commandUser)
       
    })
    response = await validCommande.json();
    alert(`${response.orderId}`)} 

    
        
    


    

       
        


validCommand.addEventListener("click", async function () {
    
    
    if ( valid.filter(function (value) { return value === true; }).length == 5)
    {       postData()
           
    }
})




for (let i = 0; i < formControl.length; i++) {
    if (formControl[i].value == "") { formControl[i].classList = "form-control is-invalid" }
   }
 
for (let i = 0; i < formControl.length; i++) {
    formControl[i].addEventListener("focusout", function () {
        let val = formControl[i].validity
        console.log(val.patternMismatch)
                valid[i] = val.valid
         if (formControl[i].value == "") { formControl[i].classList = "form-control is-invalid" }
        
        else if (val.patternMismatch == false) {
             formControl[i].classList = "form-control is-valid";
             formControl[i].nextElementSibling.classList = "valid-feedback";
             formControl[i].nextElementSibling.innerHTML = "ok!!";
          } 
               
       
    
   
              
    //    for (let i = 0; i < formControl.length; i++){
    //        if (formControl[i].classList.contains("is-valid")) {
    //         console.log(formControl[i].classList.contains("is-valid"))
    //             valid[i]= formControl[i].checkValidity()
    //           contact[`${formControl[i].id}`] = `${formControl[i].value}`
    //      } else {valid[i]= formControl[i].checkValidity()}
    // } 
   })
}    










  

 


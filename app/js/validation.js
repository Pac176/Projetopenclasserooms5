

let contact = {}
let products = []
let panier = {}
panier.products = []
let valid = []
let commandUser = { contact, products }
let nbArticles = document.querySelector(".nbArticles")
let importNbArticles = parseInt(sessionStorage.getItem("nombreitem"))
nbArticles.innerHTML = `Nombre d'article(s): ${importNbArticles}`
let totalCommand = document.querySelector(".totalCommande")
let importTotalCommand = parseInt(sessionStorage.getItem("total"))
totalCommand.innerHTML = `prix total: ${importTotalCommand}€`
let validCommand =document.querySelector(".validCommand")
let formControl = document.querySelectorAll(".form-control")
let feedBack = document.querySelectorAll(".feedback")

//////////////////////////////////generer products a partir de localstorage///////////////////////

for(let i = 0; i < localStorage.length; i++) {
     products[i] = localStorage.key(i)
 panier.products.push(JSON.parse(localStorage.getItem(products[i])))
}


//////////////////requete Post pour envoyer commandUser(contact + products)///////////////////////////////////

async function postData() {
     const validCommande = await fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST', headers: {'Content-Type': 'application/json'},body: JSON.stringify(commandUser)
        })
        response = await validCommande.json();
        alert(`${response.orderId}`)} 

//////////////////////////bouton de validation//////////////////////////////////////////////

let form = document.querySelector("#order-form");


form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("coucou")

        if ( valid.filter(function (value) { return value === true; }).length == 5)
    {       postData()
     
    }
})

/////////////////////////////////////gestion du formulaire/////////////////////////////////


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
               
////////////////////////////////////generer le contact///////////////////////////////       
    
               
       for (let i = 0; i < formControl.length; i++){
           if (formControl[i].classList.contains("is-valid")) {
            console.log(formControl[i].classList.contains("is-valid"))
                valid[i]= formControl[i].checkValidity()
              contact[`${formControl[i].id}`] = `${formControl[i].value}`
         } else {valid[i]= formControl[i].checkValidity()}
    } 
   })
}    










  

 


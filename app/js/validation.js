

let contact = {}
let products = []
let valid = []
let commandUser = { contact, products }
let nbArticles = document.querySelector(".nbArticles")
let totalCommand = document.querySelector(".totalCommande")
nbArticles.innerHTML = `Nombre d'article(s): ${parseInt(localStorage.getItem("nombreitem"))}`
totalCommand.innerHTML = `prix total: ${parseInt(localStorage.getItem("total"))}€`
let validCommand =document.querySelector(".validCommand")
let formControl = document.querySelectorAll(".form-control")
let feedBack = document.querySelectorAll(".feedback")

//////////////////////////////////generer products a partir de localstorage///////////////////////


products.push(JSON.parse(localStorage.getItem("cart")))


//////////////////requete Post pour envoyer commandUser(contact + products)///////////////////////////////////

async function postData() {
    try {
        const validCommande = await fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST', headers: {'Content-Type': 'application/json'},body: JSON.stringify(commandUser)
        })
    response = await validCommande.json();
    let message = document.createElement("message")
    message.setAttribute("class","alert alert-success")
        form.appendChild(message)
    message.innerHTML=`<h4 class="alert-heading">Bien joué!</h4>
                    <p>Apres plus de 2 mois d'un dur labeur tu peux enfin commander tes nounours, ton numero de commande est le: </p>
                    <hr>
                    <p class="mb-0">${response.orderId}</p>`
        
    } catch {
        let message = document.createElement("message")
    message.setAttribute("class","alert alert-danger")
        form.appendChild(message)
    message.innerHTML=`<h4 class="alert-heading">Echec!</h4>
                    <p>Le serveur est capricieux et te fais attendre!</p>
                    <hr>
                    <p class="mb-0">Try again!!</p>`
        
     }



        } 

//////////////////////////bouton de validation//////////////////////////////////////////////

let form = document.querySelector("#order-form");
form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("P5 fini ouf!!!")
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
              valid[i]= formControl[i].checkValidity()
              contact[`${formControl[i].id}`] = `${formControl[i].value}`
         } else {valid[i]= formControl[i].checkValidity()}
    } 
   })
}    










  

 


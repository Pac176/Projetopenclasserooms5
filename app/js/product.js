let urlTeddies = "http://localhost:3000/api/teddies"


      



//////////////////////////construction de l'url de chaque produit pour le 2e requete/////////////////////


const searchParams = new URLSearchParams(window.location.search);
const urlId = searchParams.get("id");
const urlApiId = urlTeddies + "/" + urlId
console.log(urlApiId)


///////////////////2eme requete avec ID////////////////////////////////////////

 async function getDataIdFromApi() {
  try {              
                const reponse = await fetch(urlApiId);
                let product = await reponse.json();
                showProductDetail(product); //appel de la fonction productsdetail
                
        }   catch (erreur) {
              alert(`Erreur: ${erreur.message}`)
    };
   
 }

//////////////////////fonction affichage du detail produit////////////////////////////////

function showProductDetail(productFromApi) {
  let target = document.querySelector(".teddies");
  target.setAttribute("style", "justify-content:center")
  target.innerHTML = ""
  let domproduct = document.createElement("product");
  target.appendChild(domproduct);
  domproduct.classList.add("teddie", "col-12", "col-md-9", "col-lg-9", "col-xl-6")
  domproduct.innerHTML = `<div class="card cardDetail" style="text-decoration: none; color:black; display:flex;  ">
                                            <div class="card-body">
                                              <h2 style="font-family: 'Schoolbell', cursive;" class="card-title text-center">${productFromApi.name}</h2>
                                              <img id="${productFromApi._id}" class="card-img-top" src="${productFromApi.imageUrl}" alt="..."><br>
                                              
                                              <p><u>Description du produit:</u></p>
                                              <p class="card-text "><em>${productFromApi.description}</p>
                                              <p class="card-text prix"><strong>${productFromApi.price / 100}€</strong></p>
                                              <select class="selectpicker" style="width:75%;"></select><br><br>
                                              <button id="btn_panier" type="button" class="btn btn-outline-success">Ajouter au panier</button>
                                            </div>
                                        </div>`
  
//////////////////////////////////////////////////////////////////ajout option couleur//////////////////////////////////
  
  let selectOption = document.querySelector(".selectpicker");
  let optionTitle = document.createElement("option");
  optionTitle.innerHTML = "selectionnez la couleur..." 
  selectOption.appendChild(optionTitle)
      for (let value of productFromApi.colors) { 
            let option = document.createElement("option");
            selectOption.appendChild(option)
              option.innerHTML = `${value}`
  }
  
  /////////////////////////////////////////////////////////////////////ajout AU LOCALSTORAGE////////////////////////////////////////
    let btnPanier = document.querySelector("#btn_panier");
    let selectColor = document.querySelector(".selectpicker")
    console.log(productFromApi)
    btnPanier.addEventListener("click", function () {
      
      if (selectColor.value == "selectionnez la couleur...") {return alert("veuillez selectionner une couleur") }
      
    
      else {
        
        cartClass.addToCart(productFromApi)
        location.reload()
      }
    
   
   
    }) 
}


getDataIdFromApi().then(function () {
                  
                 cartClass.cartNotification
}

)






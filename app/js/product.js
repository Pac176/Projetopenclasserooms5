//////////////////////////construction de l'url de chaque produit pour le 2e requete/////////////////////
const urlTeddies = "http://localhost:3000/api/teddies";
const searchParams = new URLSearchParams(window.location.search);
const urlId = searchParams.get("id");
const urlApiId = urlTeddies + "/" + urlId
console.log(urlApiId)


///////////////////2eme requete avec ID////////////////////////////////////////

async function getDataIdFromApi() {
  try {              
                const reponse = await fetch(urlApiId);
                let product = await reponse.json();
                console.log(product)
                showproductDetail(product); //appel de la fonction productsdetail
        }   catch (erreur) {
              alert(`Erreur: ${erreur.message}`)
    };
   
 }



//////////////////////fonction affichage du detail produit////////////////////////////////

function showproductDetail(productFromApi) {
  let target = document.querySelector(".teddies");
  target.setAttribute("style", "justify-content:center" )
  target.innerHTML = ""
    let domproduct = document.createElement("product");
    console.log(productFromApi)
    target.appendChild(domproduct);
    domproduct.classList.add("teddie", "col-12", "col-md-9", "col-lg-9", "col-xl-6")
    domproduct.innerHTML = `<div class="card cardDetail" style="text-decoration: none; color:black; display:flex;  ">
                                            <div class="card-body">
                                              <h2 style="font-family: 'Schoolbell', cursive;" class="card-title text-center">${productFromApi.name}</h2>
                                              <img id="${productFromApi._id}" class="card-img-top" src="${productFromApi.imageUrl}" alt="...">
                                              <p class="card-text "><em>${productFromApi.description}</em></p>
                                              <p class="card-text "><strong>${productFromApi.price /100 }€</strong></p>
                                              <select></select><br>
                                              <button type="button" class="btn btn-outline-success">Ajouter au panier</button>
                                            </div>
                                        </div>` 

    
    
}

getDataIdFromApi()
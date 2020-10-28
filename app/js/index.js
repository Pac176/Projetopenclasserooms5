const urlTeddies = "http://localhost:3000/api/teddies";      // adresse API



//Utilisation d'httprequest pour info
// let importFromApi = function (url) {
//     return new Promise(function (resolve, reject) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//         xhr.send()
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     console.log("terminé", xhr);
//                     resolve(xhr.responseText)
//                 } else {
//                     reject(xhr)
//                 }
//             }
//         }
//     })
// };
  

////////////fonction asynchrone permettant d'utiliser await derriere l'API fetch/////////////////////

async function getDataFromApi() {
  try {
              
                const reponse = await fetch(urlTeddies);
                products = await reponse.json();
                console.log(products)
                showproductList(products); //appel de la fonction listeproducts 
                choixproduct();              //appel de la fonction survol
               
        }   catch (erreur) {
              alert(`Erreur: ${erreur.message}`)
    };
   
 }


//////////////////////fonction affichage liste products////////////////////////////////

 function showproductList(productsFromApi) {
    let target = document.querySelector(".teddies");
    
    for (let i = 0; i < productsFromApi.length; i++) {
      let domproduct = document.createElement("product");
      let item = productsFromApi[i]
      target.appendChild(domproduct);
      domproduct.classList.add("teddie", "col-12", "col-md-6", "col-lg-4", "col-xl-3")
      domproduct.innerHTML = `<a href="product.html?id=${item._id}"<div style="text-decoration: none; color:black" href="">
                                        <div class="card " id="${item.name}">
                                            <div class="card-body">
                                                <h2 style="font-family: 'Schoolbell', cursive;" class="card-title text-center">${item.name}</h2>
                                                <img id="${item._id}" class="card-img-top" src="${item.imageUrl}" alt="...">
                                                <p class="card-text "><strong>${item.price/100}€</strong></p>
                                            </div>
                                        </div>
                                      </div></a>`
    
    }
}

////////////////////////////////Fonction survol products/////////////////////////////////


function choixproduct() {
       const card = document.querySelectorAll(".card");
     for (const element of card) {
       element.addEventListener("mouseover", function () { element.style = "box-shadow: #6F35C0 2px 2px 9px 0px; cursor:  pointer"; })
       element.addEventListener("mouseout", function () { element.style = ""; });
         
        }
  }


//////////Appel de la page index//////////////////////////////


getDataFromApi()
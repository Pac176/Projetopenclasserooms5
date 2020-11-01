let keyPanier = []
let panier = {}
panier.products = []
let prixPanier =[]
let quantiteOurs = []
//////////////////recuperation panier//////////////////////////

for(let i = 0; i < localStorage.length; i++) {
     keyPanier[i] = localStorage.key(i)
 panier.products.push(JSON.parse(localStorage.getItem(keyPanier[i])))
}

 
///////////////////injection dom produits achetés//////////////////////



for (let i = 0; i < panier.products.length;i++) {
    if (panier.products[i]) {
        prixPanier[i] = `${panier.products[i].price / 100}`
        let target = document.querySelector(".panier");
        let importPanier = document.createElement("tr");
        importPanier.classList.add("produit")
        target.appendChild(importPanier);
        importPanier.innerHTML = ` <td data-th="Produit">
                                        <div class="row">
                                            <div class="col-md-3 text-left">
                                                <img src=${panier.products[i].imageUrl} alt=""
                                                    class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                                            </div>
                                            <div class="col-md-9 text-left mt-sm-2">
                                                <h4>${panier.products[i].name}</h4>
                                                <p class="font-weight-light"><em>Couleur: ${panier.products[i].colors}</em></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class ="prixOurs" data-th="Price">${panier.products[i].price / 100}€</td>
                                    <td data-th="Quantity">
                                    
                                        <input type="number" class="nbOurs form-control form-control-lg text-center" value="1">
                                    </td>
                                    <td class="actions" data-th="">
                                        <div class="text-right">
                                            <button class="recalculer btn btn-white border-secondary bg-white btn-md mb-2">
                                                <i class="fas fa-sync"></i>
                                            </button>
                                            <button class="reset btn btn-white border-secondary bg-white btn-md mb-2">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <td  class ="prixTotalOurs text-center" data-th="Sous total">€</td>
                                            <div></div>
                                        </div>
                                    </td>`;

        
    }
 }
   
let nbOurs = document.querySelectorAll(".nbOurs")
let recal = document.querySelectorAll(".recalculer")
let subTotal = document.querySelectorAll(".prixTotalOurs")
let reset = document.querySelectorAll(".reset")
let divpanier = document.querySelector(".panier")
let produit = document.querySelectorAll(".produit")



for (let value of recal) {
         for (let i = 0; i < nbOurs.length; i++) {
          subTotal[i].innerHTML = nbOurs[i].value * prixPanier[i] + "€"
        }
    
}

 

for (let value of recal) {
    value.addEventListener("click", function () {
        for (let i = 0; i < nbOurs.length; i++) {
            
          subTotal[i].innerHTML = nbOurs[i].value * prixPanier[i] + "€"
        }
    })
}   
    
for (let i = 0; i < reset.length; i++) {
    reset[i].addEventListener("click", function () {
        divpanier.removeChild(produit[i])
        localStorage.removeItem(panier.products[i].name + " & " + panier.products[i].colors)
        confirm('Êtes vous sur de vouloir supprimer cet élément ?')
    })
}   




   
   




  
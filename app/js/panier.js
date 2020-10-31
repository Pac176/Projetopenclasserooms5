let keyPanier = []
let panier = {}
panier.products = []
let prixPanier =[]

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
                                    <td class ="prixOurs"data-th="Price">${panier.products[i].price / 100}€</td>
                                    <td data-th="Quantity">
                                    
                                        <input type="number" class="qteOurs" >
                                    </td>
                                    <td class="actions" data-th="">
                                        <div class="text-right">
                                            <button class="recalculer btn btn-white border-secondary bg-white btn-md mb-2">
                                                <i class="fas fa-sync">recalculer</i>
                                            </button>
                                            <button class=" btn btn-white border-secondary bg-white btn-md mb-2">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <td  class ="prixTotalOurs" data-th="Sous total"></td>
                                            <div></div>
                                        </div>
                                    </td>`;
        
        
        
            
     



        
    }
}      
    







   
   




  
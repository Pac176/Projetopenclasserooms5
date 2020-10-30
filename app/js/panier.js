let panier = {}
panier.products =[]



let produits = ["Arnold & Dark brown",
"Arnold & Pale brown", 
"Arnold & White",
"Garfunkel & Beige",
"Garfunkel & Chocolate",
"Garfunkel & Tan",
"Gustav & Blue",
"Gustav & Brown",
"Gustav & Pink",
"Lenny and Carl & Brown",
"Norbert & Chocolate",
"Norbert & Tan",
"Norbert & White",
"Norbert & Black"]

for (let value of produits) {
   
    panier.products.push(JSON.parse(localStorage.getItem(value)))
    
 
}

for (let value of panier.products) {
    if (value) {
        console.log(value)
        let target = document.querySelector(".panier");      
        let importPanier = document.createElement("tr");
        target.appendChild(importPanier);
        importPanier.innerHTML =` <td data-th="Produit">
                                        <div class="row">
                                            <div class="col-md-3 text-left">
                                                <img src=${value.imageUrl} alt=""
                                                    class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                                            </div>
                                            <div class="col-md-9 text-left mt-sm-2">
                                                <h4>${value.name}</h4>
                                                <p class="font-weight-light">${value.colors}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Price">${value.price/100}€</td>
                                    <td data-th="Quantity">
                                        <input type="number" class="form-control form-control-lg text-center" value="1">
                                    </td>
                                    <td class="actions" data-th="">
                                        <div class="text-right">
                                            <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                                                <i class="fas fa-sync"></i>
                                            </button>
                                            <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <div></div>
                                        </div>
                                    </td>
                                `
    }
        
    }










   
   




                               

//  
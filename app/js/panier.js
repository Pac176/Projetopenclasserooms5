


let prixPanier =[]
let idProducts = []








 
/////////////////////////class panier//////////////////////////

class Cart {

    
    constructor() {
        this.products = []
        this.products = JSON.parse(localStorage.getItem("cart"))
        
           


    }

    get displayCart() {
        let nbItems = document.querySelector('.nbItems');
        for (let i = 0; i < this.products.length; i++) {
            nbItems.innerHTML = this.products.length
            prixPanier[i] = `${this.products[i].price / 100}`
            let target = document.querySelector(".products");
            let importPanier = document.createElement("tr");
            importPanier.classList.add("produit")
            target.appendChild(importPanier);
            importPanier.innerHTML = `      
                                        <td data-th="Produit">
                                        <div class="row">
                                            <div class="col-md-3 text-left">
                                                <img src=${this.products[i].imageUrl} alt=""
                                                    class="img-fluid d-none d-md-block rounded mb-2 shadow ">
                                            </div>
                                            <div class="col-md-9 text-left mt-sm-2">
                                                <h4>${this.products[i].name}</h4>
                                                <p class="font-weight-light"><em></em></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class ="prixOurs" data-th="Price">${this.products[i].price / 100}€</td>
                                    <td data-th="Quantity">
                                    
                                        <input type="number" class="nbOurs form-control form-control-lg text-center" value="1">
                                    </td>
                                    <td class="actions" data-th="">
                                        <div class="text-right">
                                                <button class="reset btn btn-white border-secondary bg-white btn-md mb-2">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <td  class ="prixTotalOurs text-center" data-th="Sous total">€</td>
                                            <div></div>
                                        </div>
                                    </td>`;
        
        }
       
        this.prixTotal()
        this.cartNotification
        this.deleteFromCart()
    }
    

    get cartNotification() {
        let pastille = document.querySelector(".pastillePanier")
        if (localStorage.length > 0) { pastille.innerHTML = localStorage.length }
    }
   
    deleteFromCart() {
        let divpanier = document.querySelector(".products")
        let reset = document.querySelectorAll(".reset");
        console.log(reset[0])
        let produit = document.querySelectorAll(".produit");
        for (let i = 0; i < reset.length; i++) {
            reset[i].addEventListener("click", function () {
                
                localStorage.removeItem(cartClass.products[i]._id)
                divpanier.removeChild(produit[i]);
                cartClass.prixTotal()
            })
        }
      
    }



  
    prixTotal() {
        
        let prixTotal = document.querySelector(".prixTotal ");
        let subTotal = document.querySelectorAll(".prixTotalOurs");
        let nbOurs = document.querySelectorAll(".nbOurs");
        let prixOurs = document.querySelectorAll(".prixOurs")
        if (localStorage.length == 0) {
            prixTotal.innerHTML = "0€"
        } else {
            const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
            prixTotal.innerHTML = prixPanier.reduce(reducer) + "€";
        }


        for (let i = 0; i < subTotal.length; i++) {
           
            subTotal[i].innerHTML = nbOurs[i].value * parseInt(prixOurs[i].innerHTML) + "€";
            nbOurs[i].addEventListener("change", function () {
                subTotal[i].innerHTML = nbOurs[i].value * parseInt(prixOurs[i].innerHTML) + "€";
                prixPanier[i] = parseInt(subTotal[i].innerHTML)
                const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                prixTotal.innerHTML = prixPanier.reduce(reducer) + "€";
            })
        }
    }
 

    loadCart() {
        for (let i = 0; i < localStorage.length; i++) {
            idProducts[i] = localStorage.key(i)
            this.products.push(JSON.parse(localStorage.getItem(idProducts[i])))
    
        }
    }
    addToCart(value) {

        if (localStorage.getItem("cart")) {
            this.products = JSON.parse(localStorage.getItem("cart"))
            console.log(this.products)
            let test;
                for (let product of this.products) {
                console.log(product._id == value._id)
                if (product._id == value._id) { return test = true }
            }
                if (test == true) {
                    localStorage.setItem("cart", JSON.stringify(this.products))
            }   else {
                    this.products.push(value)
                    localStorage.setItem("cart", JSON.stringify(this.products))}
        
        } else {
            localStorage.setItem("cart", JSON.stringify([value]))
           
        }
    }
}





let cartClass = new Cart(idProducts)
let display = function(){cartClass.displayCart}
cartClass.displayCart 














    

// //////////////////////////////possibilité de supprimer un article du panier//////

    


////////////////validation de la commande envoi sur session storage nbitem et total/////////////

// function exportSessionStorage() {
//     sessionStorage.setItem("nombreitem", nbItems.innerHTML)
//     sessionStorage.setItem("total",prixTotal.innerHTML)}
  

///////////////////////////////////////class











 
/////////////////////////class panier//////////////////////////

export class Cart {
  constructor() {
    this.products = []
    this.products = JSON.parse(localStorage.getItem("cart"))
  }

   
   validCommand() {
       document.location.href = "http://127.0.0.1:5500/app/pages/validation.html"
    }  
    get cartNotification() {
        this.products = JSON.parse(localStorage.getItem("cart"))
            if (JSON.parse(localStorage.getItem("cart"))) {
                if (document.querySelector(".pastillePanier") == null) {
                    let logoPanier = document.querySelector(".logoPanier")
                    let pastille = document.createElement("notification")
                    pastille.classList.add("pastillePanier")
                    logoPanier.insertAdjacentElement("afterbegin",pastille)
                    pastille.innerHTML = this.products.length
                } else {
                    let pastille = document.querySelector(".pastillePanier")
                    pastille.innerHTML = this.products.length
                    pastille.classList.add("pastillePanier")
            }
            } else {
                
            }
    }
   
    qteOursInLocalStorage() {
        for (let i = 0; i < nbOurs.length;i++){
                qte[i] = parseInt(nbOurs[i].value)
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    localStorage.setItem("Quantité", qte.reduce(reducer)) 
        }
    }

    deleteFromCart() {
        console.log(this.products)
        let divpanier = document.querySelector(".products")
        let reset = document.querySelectorAll(".reset");
        let produit = document.querySelectorAll(".produit");
            for (let i = 0; i < reset.length; i++) {
                reset[i].addEventListener("click", () => {
                    this.products = JSON.parse(localStorage.getItem("cart"));
                    this.products.splice(reset[i], 1)
                    console.log(this.products)
                    if (this.products.length == 0) { 
                if (confirm("Etes vous sur de vouloir supprimer ce produit?")){
                divpanier.removeChild(produit[i]);     
                localStorage.clear();
                let logoPanier = document.querySelector(".logoPanier")
                let pastille = document.querySelector(".pastillePanier")
                    logoPanier.removeChild(pastille)  
                let panier = document.querySelector(".panier")
                panier.innerHTML = `<div class="alert alert-warning" role="alert">
                                     Vous n'avez rien commandé!!!
                                                                    </div>`
                    


                } else { }
            }else if (confirm("Etes vous sur de vouloir supprimer ce produit?")){
                localStorage.setItem("cart", JSON.stringify(this.products))
                divpanier.removeChild(produit[i]);
                this.prixTotal()
                this.cartNotification
                }      
            })
        }
    }

    prixTotal() {
       console.log(this.product)
        if (this.products.length > 0) {
            let prixPanier = []   /////prix des differents items du panier
            for (let i = 0; i < this.products.length; i++) {
                prixPanier[i] = `${this.products[i].price / 100}`//////////////////recuperation des prix pour calcul total
            }
            let prixTotal = document.querySelector(".prixTotal ");
            let subTotal = document.querySelectorAll(".prixTotalOurs");
            let nbOurs = document.querySelectorAll(".nbOurs");
            let prixOurs = document.querySelectorAll(".prixOurs")
            let qte = []
            let nbItems = document.querySelector(".nbItems")
            qte[0] = nbItems.innerHTML
            if (localStorage.length == 0) {
                prixTotal.innerHTML = "0€"
            } else {
                const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                prixTotal.innerHTML = prixPanier.reduce(reducer) + "€";
                localStorage.setItem("total", prixTotal.innerHTML)
            }
            for (let i = 0; i < subTotal.length; i++) {
                subTotal[i].innerHTML = nbOurs[i].value * parseInt(prixOurs[i].innerHTML) + "€";
                for (let i = 0; i < nbOurs.length; i++) {
                    qte[i] = parseInt(nbOurs[i].value)
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    localStorage.setItem("Quantité", qte.reduce(reducer))
                }
                nbOurs[i].addEventListener("change", function () {
                    subTotal[i].innerHTML = nbOurs[i].value * parseInt(prixOurs[i].innerHTML) + "€";
                    prixPanier[i] = parseInt(subTotal[i].innerHTML)
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    prixTotal.innerHTML = prixPanier.reduce(reducer) + "€";
                    localStorage.setItem("total", prixTotal.innerHTML)
                    
                    for (let i = 0; i < nbOurs.length; i++) {
                        qte[i] = parseInt(nbOurs[i].value)
                        const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                        localStorage.setItem("Quantité", qte.reduce(reducer))
                    }
                })
            }
        } else { console.log("hello") }
    }
    loadCart() {
        this.products = JSON.parse(localStorage.getItem("cart"))
    }
    addToCart(value) {

        if (localStorage.getItem("cart")) {
            this.products = JSON.parse(localStorage.getItem("cart"))
            console.log(this.products)
            let test;
            for (let product of this.products) {
                if (product._id == value._id) {
                    return test = true
                }
            }
            if (test == true) {
                localStorage.setItem("cart", JSON.stringify(this.products))
            }else{
                this.products.push(value)
                localStorage.setItem("cart", JSON.stringify(this.products))
                }
        
        }else{
            localStorage.setItem("cart", JSON.stringify([value]))
           
        }
        
    }
}


   

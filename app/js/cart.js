
/////////////////////////class panier//////////////////////////

export class Cart {
  constructor() {
    this.products = []
    this.products = JSON.parse(localStorage.getItem("cart"))
  }

///////////////////////////lien vers validation de commande  
   validCommand() {
       document.location.href = "http://127.0.0.1:5500/app/pages/validation.html"
    } 
//////////////////////////pastille notification
    get cartNotification() {
        this.products = JSON.parse(localStorage.getItem("cart"))
        /////////////////////////////si produit dans localstorage
        if (JSON.parse(localStorage.getItem("cart"))) {
                ////////////////////et si n'existe pas alors création
                if (document.querySelector(".pastillePanier") == null) {
                    let logoPanier = document.querySelector(".logoPanier")
                    let pastille = document.createElement("notification")
                    pastille.classList.add("pastillePanier")
                    logoPanier.insertAdjacentElement("afterbegin",pastille)
                    pastille.innerHTML = this.products.length
                } else {
                /////////////////////sinon juste mise a jour
                    let pastille = document.querySelector(".pastillePanier")
                    pastille.innerHTML = this.products.length
                    pastille.classList.add("pastillePanier")
            }
        } 
    }
/////////////////////////envoi sur localstorage de Quantité pour utilisation dans la page formulaire  
    get qteOursInLocalStorage() {
        let qte = []
        let nbOurs = document.querySelectorAll(".nbOurs");
            for (let i = 0; i < nbOurs.length;i++){
                qte[i] = parseInt(nbOurs[i].value)
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    localStorage.setItem("Quantité", qte.reduce(reducer)) 
        }
    }
////////////////////////effacer item du panier
    deleteFromCart() {
        let divpanier = document.querySelector(".products")
        let reset = document.querySelectorAll(".reset");
        let produit = document.querySelectorAll(".produit");
        /////////////////////////////boucle sur les boutton supprimer
            for (let i = 0; i < reset.length; i++) {
                reset[i].addEventListener("click", () => {
                    this.products = JSON.parse(localStorage.getItem("cart"));
                    this.products.splice(reset[i], 1)
                    /////////////////si dernier produit et confirmation alors panier vide
                    if (this.products.length == 0) { 
                        if (confirm("Etes vous sur de vouloir supprimer ce produit?")){
                            divpanier.removeChild(produit[i]);     
                            localStorage.clear();
                            let logoPanier = document.querySelector(".logoPanier")
                            let pastille = document.querySelector(".pastillePanier")
                            logoPanier.removeChild(pastille)  
                            let panier = document.querySelector(".panier")
                            panier.innerHTML = `<div class="alert alert-warning" role="alert">
                                     Panier vide!
                                                                    </div>`
                        } 
                    ////////////////si pas dernier alors juste effacer l'item
                    }else if (confirm("Etes vous sur de vouloir supprimer ce produit?")){
                        localStorage.setItem("cart", JSON.stringify(this.products))
                        divpanier.removeChild(produit[i]);
                        this.prixTotal
                        this.cartNotification
                }      
            })
        }
    }
///////////////////////Fonction calcul du total commande
    get prixTotal() {
        //////////si il y a des produits dans le panier avec par defaut quantité a 1
        if (this.products.length > 0) {
            let prixPanier = []   /////prix des differents items du panier
            for (let i = 0; i < this.products.length; i++) {
                prixPanier[i] = `${this.products[i].price / 100}`//////////////////recuperation des prix pour calcul total
            }
            let prixTotal = document.querySelector(".prixTotal ");
            let subTotal = document.querySelectorAll(".prixTotalOurs");
            let prixOurs = document.querySelectorAll(".prixOurs")
            let nbOurs = document.querySelectorAll(".nbOurs");
        
            //let nbItems = document.querySelector(".nbItems")
            //qte[0] = nbItems.innerHTML
            ////////////////////////////////////// methode reduce sur la tableau de prix pour avoir la somme
            const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
            prixTotal.innerHTML = prixPanier.reduce(reducer) + "€";
            localStorage.setItem("total", prixTotal.innerHTML) ////envoi sur le localstorage pour utilisation
            //////////////////////////////////////calcul des sous totaux pour recalcul du total en fonction des quantités
            for (let i = 0; i < subTotal.length; i++) {
                subTotal[i].innerHTML = nbOurs[i].value * parseInt(prixOurs[i].innerHTML) + "€";
                this.qteOursInLocalStorage
                    nbOurs[i].addEventListener("change",  () => {
                    subTotal[i].innerHTML = nbOurs[i].value * parseInt(prixOurs[i].innerHTML) + "€";
                    prixPanier[i] = parseInt(subTotal[i].innerHTML);
                    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
                    prixTotal.innerHTML = prixPanier.reduce(reducer) + "€";
                    localStorage.setItem("total", prixTotal.innerHTML);
                    this.qteOursInLocalStorage
               })
            }
        } 
    }
////////////////////////fonction ajout de produit dans le panier   
    addToCart(value) {
       /////////////////s'il y a un cart actif alors import des produits
        if (localStorage.getItem("cart")) {
            this.products = JSON.parse(localStorage.getItem("cart"))
         ///////////////je test pour eviter une répétition du meme produit   
            let test;
            for (let product of this.products) {
                if (product._id == value._id) {
                    return test = true
                }
            }
        ///////////////si produit present renvoi au localstorage
                if (test == true) {
                    localStorage.setItem("cart", JSON.stringify(this.products))
                } else {
        ///////////////sinon ajouter le produit au tableau et renvoi sur localstorage
                this.products.push(value)
                localStorage.setItem("cart", JSON.stringify(this.products))
                }
        //////////////////////si c'est le premier produit alors envoi sur localstorage
        } else {
            localStorage.setItem("cart", JSON.stringify([value]))
           
        }
        
    }
}


   

import { Cart } from "./Cart.js"
import { pageIndex} from "./index.js"
import { pageProduct} from "./product.js"
let cartClass = new Cart()
cartClass.cartNotification    // notification panier
let url = window.location.search 

////////////////////////////////requete + fonction liste + fonction survol /////////////////

 url == ""? pageIndex():pageProduct()


 
//////////////////////////construction de l'url de chaque produit pour le 2e requete/////////////////////





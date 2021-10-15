
const products = [
    {   name: "Women Top",
        price: 4000,
        id: 1,
        image:"images/shop-1.jpg"
    },
    {   name: "Men's Pink Shirt",
        price: "4200",
        id: 2,
        image:"images/shop-2.jpg"
    },
    {   name: "Dark Blue Top",
        price: "4000",
        id: 3,
        image:"images/shop-3.jpg"
    },
    {   name: "Women Tunic",
        price: "4000",
        id: 4,
        image:"images/shop-4.jpg"
    },
    {   name: "Yellow T-Shirt",
        price: "4400",
        id: 5,
        image:"images/shop-5.jpg"
    },
    {   name: "Straight Kurta",
        price: "4000",
        id: 6,
        image:"images/shop-6.jpg"
    },
    {   name: "White T-Shirt",
        price: "4000",
        id: 7,
        image:"images/shop-7.jpg"
    },
    {   name: "Blue Sweater",
        price: "4000",
        id: 8,
        image:"images/shop-8.jpg"
    },

]

let himJS = function () {
    const getElById = function (id) {
        return document.getElementById(id);
    }
    const getEleByClass = function (cls) {
        return document.getElementsByClassName(cls);
    }
    const renderProducts = function (id, products) {
        const productList = products.map((product) => {
            return ` <div class="col-md-4 id={product-${id}">
            <div class="card product-card" id="card">
                <img src="${product.image}" class="card-img-top product-image">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.name}</h5>
                    <div class="price">${product.price}</div>
                    <a href="#" data-productid = ${product.id} class="btn btn-primary cart-btn">Add To Cart</a>
                </div>
            </div>
        </div>`
        })
        getElById(id).innerHTML = productList.join(" ");
    }
    const renderCart = function (id, cartProduct) {
        const cartProductList = cartProduct.map((product) => {
            return `<li>
                      <div class="p-2">
                         ${product.name} x ${product.quantity} = $${product.price * product.quantity}
                    <li>
                     </div>
                   </li>  `
        })
        getElById(id).innerHTML = cartProductList.join(" ");
    }
    const addToCart = function (e, cartArr, ctx, cartProduct) {
        console.log(e);
        console.log(ctx.dataset.productId);
        const foundIndex = cartArr.findIndex((el) => el.id === cartProduct.id);
        if (foundIndex < 0) {
            cartArr.push(cartProduct);
        } else {
            cartArr[foundIndex].quantity = cartArr[foundIndex].quantity + 1;
        }
        renderCart("cart-dropdown", cartArr);
    }
    return {
        renderProducts,
        getElById,
        getEleByClass,
        addToCart
    }
}()
window.addEventListener('load', (event) => {
    const cart = []
    himJS.renderProducts("products-row", products);
    const productElements = himJS.getEleByClass("cart-btn");
    Array.from(productElements).forEach(function (e) {
        e.addEventListener("click", function () {
            const productId = parseInt(this.dataset.productid);
            const cartproduct = products[products.findIndex((product) => product.id === productId)]
            cartproduct.quantity = 1;
            himJS.addToCart(e, cart, this, cartproduct)
        });
    });
});

let btnform = document.getElementById("formBtn");
btnform.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Your Form Is Submitted Successfully");
});



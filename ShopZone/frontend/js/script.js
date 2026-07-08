let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Add product to cart

function addToCart(name, price){

    let product = {
        name:name,
        price:price,
        quantity:1
    };


    cart.push(product);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    alert(name + " added to cart");

}




// Search Product

function searchProduct(){

    let input = document
    .getElementById("searchBox")
    .value
    .toLowerCase();


    let products =
    document.querySelectorAll(".product-card");


    products.forEach(product=>{


        let name =
        product
        .querySelector("h3")
        .innerText
        .toLowerCase();



        if(name.includes(input)){

            product.style.display="block";

        }
        else{

            product.style.display="none";

        }


    });


}




// Cart Count

function cartCount(){

    let count =
    document.getElementById("cart-count");


    if(count){

        count.innerHTML = cart.length;

    }

}




// Newsletter

function subscribe(){

    let email =
    document
    .querySelector(".newsletter input")
    .value;


    if(email==""){

        alert("Enter email");

    }

    else{

        alert("Thank you for subscribing");

    }

}




// Page Load

document.addEventListener(
"DOMContentLoaded",
()=>{


cartCount();



let buttons =
document.querySelectorAll(
".product-card button"
);



buttons.forEach(button=>{


button.addEventListener(
"click",
()=>{


let card =
button.parentElement;


let name =
card.querySelector("h3").innerText;


let price =
card.querySelector("h4")
.innerText
.replace("₹","");


addToCart(name,price);



});



});



});

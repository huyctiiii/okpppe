console.log('check')
$(document).ready(function(){
    $('.your-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
    });
  });

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyDs3ee478Mtqa4FSG6ZZUbHuVMDgcoNUpE",
    authDomain: "aaaassssqqqq-bd9f5.firebaseapp.com",
    projectId: "aaaassssqqqq-bd9f5",
    storageBucket: "aaaassssqqqq-bd9f5.firebasestorage.app",
    messagingSenderId: "374433290128",
    appId: "1:374433290128:web:29ec8abcfc87967fc44515"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

async function getProduct() {
    const result = await getDocs(collection(db, "products"));
    const products = [];
    console.log(result)
    result.forEach((doc)=>{
        products.push({ id : doc.id, ...doc.data()});
    });
    return products;
}
async function displayProducts(){
    const productList =  document.querySelector(".row-product");

    const products = await getProduct();

    products.forEach((product) =>{
        const productDiv = document.createElement("div");
        productDiv.classList.add("col")
        productDiv.innerHTML = `
        <div class="product-item">
            <img class="" src="${product.img}">
            <h2 class="product-name" >${product.name}</h2>
            <p class="product-price" >Price: ${product.price} </p>
            <button class="detail">detail</button>
        </div>`;
            

    
    const detailButton = productDiv.querySelector(".detail");
    detailButton.addEventListener("click", function() {
        window.location.href = `detail.html?id=${product.id}`;
    })


        productList.appendChild(productDiv);
    })
}

displayProducts()
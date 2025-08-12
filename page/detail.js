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

let description = document.getElementById("description")
let name = document.getElementById("name")
let price = document.getElementById("price")
let img = document.getElementById("image")

let url= new URLSearchParams(window.location.search);
let id = url.get("id")



const docRef = getDoc(doc(db, "products", id));
docRef.then((doc) => {
    if(doc.exists()) {
        name.innerHTML = doc.data().name;
        price.innerHTML = doc.data().price;
        image.src = doc.data().img;
        description.innerHTML = doc.data().description;
    } else {
        console.log("no such document")
    }
}).catch((error) => {
    console.log("error getting document")
});

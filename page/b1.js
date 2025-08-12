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



async function saveProducts(){
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const img = document.getElementById("img").value;

    const doc = await addDoc(collection(db,"products"),{
        name: name,
        price: price,
        img: img
    });
    alert("product added successfully with ID:"+doc.id);
    window.location.reload();
}   
document.getElementById("bt1").addEventListener('click',saveProducts)
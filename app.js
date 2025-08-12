
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyDs3ee478Mtqa4FSG6ZZUbHuVMDgcoNUpE",
    authDomain: "aaaassssqqqq-bd9f5.firebaseapp.com",
    projectId: "aaaassssqqqq-bd9f5",
    storageBucket: "aaaassssqqqq-bd9f5.firebasestorage.app",
    messagingSenderId: "374433290128",
    appId: "1:374433290128:web:29ec8abcfc87967fc44515"
  };

  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);
  const provider=new GoogleAuthProvider();
  document.getElementById("gg").addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);
        alert("Login successful with Google");
        window.location.href = "./page/index.html";
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  });

  let form = document.querySelector("#login");

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      alert("Login successful");
      window.location.href = "./page/index.html";
      return;
    }
  }
  alert("Wrong username or password");
}

form.addEventListener("click", login);

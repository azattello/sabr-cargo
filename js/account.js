// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,
  get,
  ref,
  set,
  onValue, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd4T-DvXjvkPptBRIml3qgzSeHxAYVbjk",
  authDomain: "sabr-cargo.firebaseapp.com",
  databaseURL: "https://sabr-cargo-default-rtdb.firebaseio.com",
  projectId: "sabr-cargo",
  storageBucket: "sabr-cargo.appspot.com",
  messagingSenderId: "77355511774",
  appId: "1:77355511774:web:66e1c1262b8967c115f74f",
  measurementId: "G-1BVXJ2YFJK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



const userID = localStorage.getItem('user');
    
onValue(ref(db, `users/${userID}`), (snapshot) => {
        
        const name = snapshot.val().name;
        const phone = snapshot.val().phone;
        const surname = snapshot.val().surname;
        const city = snapshot.val().city;
        const password = snapshot.val().password;

        console.log(city)

        document.querySelector('.surname').innerHTML = surname;
        document.querySelector('.name').innerHTML = name;
        document.querySelector('.phone').innerHTML = phone;
        document.querySelector('.city').innerHTML = city;
        document.querySelector('.passwd').innerHTML = password;

});

document.querySelector('.exit').addEventListener('click', ()=>{
    
    if(confirm("Выйти из аккаунта?")){
        localStorage.removeItem('user');
        location.reload();
    }else{
        console.log('hmm...')
    }


});
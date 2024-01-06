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




let phone =  document.getElementById('phone');
let paswd =  document.getElementById('paswd');
let button = document.querySelector('.button');

phone.addEventListener('input', ()=>{
    if (phone.value != '' && paswd.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;


    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})
paswd.addEventListener('input', ()=>{
    if (phone.value != '' && paswd.value != '') {
        button.style.backgroundColor = '#4d73e6';
        button.style.color = '#fff';
        button.disabled = false;

    }else{
        button.style.backgroundColor = '#efefef';
        button.style.color = '#000';
        button.disabled = true;

    }
})




document.querySelector('.button').addEventListener('click', ()=>{
    
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('paswd').value;
    
    let i = 1;

    onValue(ref(db, 'users/'), (snapshot) => {



        while ( i <= Object.keys(snapshot.val()).length){
            const data = snapshot.val();
            
            onValue(ref(db, `users/user_id_${i}`), (snapshot) => {
                const phoneDB = snapshot.val().phone;
                const passwordDB = snapshot.val().password;
              
                console.log(phoneDB)
                console.log(passwordDB)
                
                if (phone === phoneDB && password === passwordDB ) {
                    console.log('Вы авторизованы')
                    window.location.replace("./index.html");
                    localStorage.setItem('user', `user_id_${i}`);

                }else{
                    console.log('Вы не авторизованы')
                    location.reload();
                }
                
            });
            
            i++

        }
    });

});
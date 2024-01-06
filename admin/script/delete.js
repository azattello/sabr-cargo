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



export function showClass(element) {
    // var className = element.className;
    let confirmed = window.confirm("Вы точно хотите удалить трек?");
    if (confirmed){
        
        let deleteStatus = 'true';

        set(ref(db, `parcels/${element}/delete`),deleteStatus)
            .then(() => {
                console.log('Трек добавлен')
                location.reload();
                input.value = ''
            })
            .catch((error) => {
                location.reload();
                console.log("Ошибка записи в базу данных: ", error);
            });
    
        
 
 
    }
}
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




let i = 1;

onValue(ref(db, 'users/'), (snapshot) => {
    

    while ( i <= Object.keys(snapshot.val()).length){
        const data = snapshot.val();
        
        onValue(ref(db, `users/user_id_${i}`), (snapshot) => {
            const phoneDB =  snapshot.val().phone;
            const passwordDB = snapshot.val().password;
            const nameDB = snapshot.val().name;
            const surnameDB = snapshot.val().surname;
            const cityDB = snapshot.val().city;
            let id = `user_id_${i}`
          
            
            const parentContainer = document.querySelector('.client__container');
            let newDiv = document.createElement('div');
            newDiv.classList.add('client')
            newDiv.classList.add(`client_${i}`)

            // Задаем текст или другое содержимое для нового элемента
            newDiv.innerHTML = `
                <div class="client__header_edit dont H__${id}_edit">
                    <div class="modal__t3">Удалить</div>
                    <ion-icon class="t3" name="close" data-info="${id}"></ion-icon>
                </div>
                <div class="client__header H__${id}">
                    <h3 class="id">${id}</h3>
                    <!--  <ion-icon class="t3" name="ellipsis-vertical" data-info="${id}"></ion-icon>-->
                </div>
                <div class="content__info">
                    <p class="fio">${nameDB + ` ` + surnameDB }</p>
                    <p class="phone">${cityDB}</p>
                    <p class="phone">${phoneDB}</p>
                    <p class="passwd">${passwordDB}</p>
                </div>    
                `;

            // Добавляем новый элемент в родительский контейнер
            parentContainer.appendChild(newDiv);

        });
        
        i++

    }
    // let blocks = document.querySelectorAll('.t3');
    // let dataInfoValue = ''; 

    // blocks.forEach(function(block) {
    //     block.addEventListener('click', function() {
    //         dataInfoValue = this.getAttribute('data-info');
    //         let header1 = document.querySelector(`.H__${dataInfoValue}`);
    //         let header2 = document.querySelector(`.H__${dataInfoValue}_edit`);
    //         header1.classList.toggle('dont');
    //         header2.classList.toggle('dont');
                  
       
    //     });
          
        
    // });
    
    // let deleteButton = document.querySelectorAll('.modal__t3');    
    // deleteButton.forEach(function(button) {
    //     button.addEventListener('click', function() {
           
    //         alert(dataInfoValue)

       
    //     });
    // });

});


// let input = document.getElementById('search');
// input.addEventListener('input', ()=>{
    
//     console.log(input.value)
    
//     let searchTerm = input.value.toLowerCase(); 

//     let results = document.querySelectorAll('.id');
//     let matchingResults = [];

//     results.forEach(function(result) {

//         let resultText = result.textContent.toLowerCase();

//         if (resultText.includes(searchTerm)) {
//             let parentElement = result.parentNode;
//             let parentClasses = parentElement.parentNode
//             let papaEl = parentClasses.classList;
//             let papaEl2 = papaEl.item(1);
//             console.log(papaEl2)
//             matchingResults.push(papaEl2);
//             let a = document.querySelector(`.${papaEl2}`);
//             // a.classList.remove('hidden')

//         }else{
//             let parentElement = result.parentNode;
//             let parentClasses = parentElement.parentNode
//             let papaEl = parentClasses.classList;
//             let papaEl2 = papaEl.item(1);
//             console.log(papaEl2)
//             matchingResults.push(papaEl2);
//             // let a = document.querySelector(`.${papaEl2}`);
//             a.classList.add('hidden')

//         }
        
//     });


//     if (matchingResults.length > 0) {
//         console.log( 'Results: ' + matchingResults.join(', '));
//     } else {
//         console.log('No results found.');
    
//     }



// })

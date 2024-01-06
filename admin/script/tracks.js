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


onValue(ref(db, `parcels`), (snapshot) => {
    
    let dataLenght = (Object.keys(snapshot.val()).length);
   
    while (i <= dataLenght){
            
        onValue(ref(db, `parcels/`),(snapshot)=>{
            let parTex = 'parcels_id_' + i;
         
  
            if (snapshot.exists()) {

                onValue(ref(db, `parcels/parcels_id_${i}`), (snapshot) => {
                    let track = snapshot.val().track != undefined ? snapshot.val().track : '';
                   
                    const statusDB = snapshot.val().options;
                            
                    const parentContainer = document.querySelector('.track__container');
                    let newDiv = document.createElement('div');
        
                    newDiv.classList.add('track');
                    newDiv.innerHTML = `
                    <div class="track__header"><h2>${track}</h2><ion-icon data-clipboard-text='${track}'" class="copyIcon" name="copy-outline"></ion-icon></div>
                        <div class="track__content">
                            <div class="status__container">
                                <div class="status_el">
                                    <div class="status-ellipse">
                                        <div class="ellips" style="background-color: ${statusDB.option1 !== undefined ? '#8faf82':''};"></div>
                                    </div>
                                    <p>Прибыл на склад в Китае </p><p class="date">${statusDB.option1 != undefined ? statusDB.option1 : ''}</p>
                                    
                                </div>
                                <!--   <div class="status_el">
                                    <div class="status-ellipse">
                                        <div class="ellips" style="background-color: ${statusDB.option2 != undefined ? '#8faf82':''};"></div>
                                    </div>
                                    <p>Отправлено в Алматы </p><p class="date">${statusDB.option2 != undefined ? statusDB.option2 : ''}</p>
                                </div>-->
                                
                                 <div class="status_el">
                                    <div class="status-ellipse">
                                        <div class="ellips" style="background-color: ${statusDB.option3 != undefined ? '#8faf82':''};"></div>
                                    </div>
                                    <p>Прибыло в Алматы</p><p class="date">${statusDB.option3 != undefined ? statusDB.option3 : ''}</p>
        
                                </div>  
                                
                                
                                <div class="status_el" style="display: ${statusDB.optionR1 != undefined ? 'flex':'none'};">
                                    <div class="status-ellipse">
                                        <div class="ellips" style="background-color: ${statusDB.optionR1 != undefined ? '#8faf82':''};"></div>
                                    </div>
                                    <p>Отправлено в Тараз</p><p class="date">${statusDB.optionR1 != undefined ? statusDB.optionR1 : ''}</p>
                                </div>
        
                                <div class="status_el" style="display: ${statusDB.optionR2 != undefined ? 'flex':'none'};">
                                <div class="status-ellipse">
                                    <div class="ellips" style="background-color: ${statusDB.optionR2 != undefined ? '#8faf82':''};"></div>
                                </div>
                                <p>Отправлено в Кордай</p><p class="date">${statusDB.optionR2 != undefined ? statusDB.optionR2 : ''}</p>
                                </div>
                                
                                <div class="status_el" style="display: ${statusDB.optionR3 != undefined ? 'flex':'none'};">
                                <div class="status-ellipse">
                                    <div class="ellips" style="background-color: ${statusDB.optionR3 != undefined ? '#8faf82':''};"></div>
                                </div>
                                <p>Отправлено в Нур-Султан</p><p class="date">${statusDB.optionR3 != undefined ? statusDB.optionR3 : ''}</p>
                                </div>
                                
                                <div class="status_el" style="display: ${statusDB.optionR4 != undefined ? 'flex':'none'};">
                                <div class="status-ellipse">
                                    <div class="ellips" style="background-color: ${statusDB.optionR4 != undefined ? '#8faf82':''};"></div>
                                </div>
                                <p>Отправлено в Павлодар</p><p class="date">${statusDB.optionR4 != undefined ? statusDB.optionR4 : ''}</p>
                                </div>
        
        
        
                                <div class="status_el">
                                    <div class="status-ellipse">
                                        <div class="ellips" style="background-color: ${statusDB.option5 != undefined ? '#8faf82':''};"></div>
                                    </div>
                                    <p>Получено</p><p class="date">${statusDB.option5 != undefined ? statusDB.option5 : ''}</p>
                                </div>
                            </div>
                        </div>`;
                
                        if (snapshot.val().delete === 'false' || snapshot.val().delete === undefined ) {
                            parentContainer.appendChild(newDiv);
                        }
                    i++
                });
            }else{
                dataLenght++
                i++
            }
        });

        
    }
  
});



  
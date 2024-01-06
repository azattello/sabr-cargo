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

const userID = localStorage.getItem('user');

onValue(ref(db, `users/${userID}/bookmarks`), (snapshot) => {
    

    let dataLenght = (Object.keys(snapshot.val()).length); 
    
    while ( i <= dataLenght){
        let bookmarkEvent = false;
        let track = ''
        let title = ''
        let bookmarkID = (`bookmark_id_${i}`)
        console.log(bookmarkID)
        if (snapshot.val()[`bookmark_id_${i}`] !== undefined) {
            title = snapshot.exists() ? snapshot.val()[`bookmark_id_${i}`].title : '';
            track = snapshot.exists() ? snapshot.val()[`bookmark_id_${i}`].track : '';

            console.log(title)
            console.log(track)

            let p = 1;
            onValue(ref(db, 'parcels/'), (snapshot) => {
                let dataLenght2 = (Object.keys(snapshot.val()).length)
                while ( p <= dataLenght2 && bookmarkEvent === false){
                    if (snapshot.val()[`parcels_id_${p}`] !== undefined) {
                        let hrefDB = `parcels_id_${p}`;
                        let trackDB = snapshot.val()[hrefDB].track;
                        

                        if (track === trackDB) {
                            
                            bookmarkEvent = true;


                            onValue(ref(db, `parcels/${hrefDB}/options`), (snapshot) => {
                               
                                const statusDB = snapshot.val();
                                if(statusDB.option5 === undefined){
                                    
                                    const parentContainer = document.querySelector('.track__container');
                                    let newDiv = document.createElement('div');

                                    newDiv.classList.add('track');
                                    newDiv.innerHTML = `
                                    <div class="track__header"><h2>${track}</h2><ion-icon class="deleteIcon" onclick="importAndShowClass('${bookmarkID}')" name="close-outline"></ion-icon></div>
                                        <div class="track__content">
                                            <div class="opisanie"><p class="opisanie__p">${title}</p></div>
                                            <div class="status__container">
                                                <div class="status_el">
                                                    <div class="status-ellipse">
                                                        <div class="ellips" style="background-color: ${statusDB.option1 !== undefined ? '#8faf82':''};"></div>
                                                    </div>
                                                    <div><p>Прибыл на склад в Китае </p><p class="date">${statusDB.option1 != undefined ? statusDB.option1 : ''}</p></div>
                                                    
                                                </div>
                                                <!--<div class="status_el">
                                                    <div class="status-ellipse">
                                                        <div class="ellips" style="background-color: ${statusDB.option2 != undefined ? '#8faf82':''};"></div>
                                                    </div>
                                                    <div><p>Отправлено в Алматы </p><p class="date">${statusDB.option2 != undefined ? statusDB.option2 : ''}</p></div>
                                                </div>-->
                                                <div class="status_el">
                                                    <div class="status-ellipse">
                                                        <div class="ellips" style="background-color: ${statusDB.option3 != undefined ? '#8faf82':''};"></div>
                                                    </div>
                                                    <div><p>Прибыло в Алматы</p><p class="date">${statusDB.option3 != undefined ? statusDB.option3 : ''}</p></div>

                                                </div>
                                                
                                                
                                                <div class="status_el" style="display: ${statusDB.optionR1 != undefined ? 'flex':'none'};">
                                                    <div class="status-ellipse">
                                                        <div class="ellips" style="background-color: ${statusDB.optionR1 != undefined ? '#8faf82':''};"></div>
                                                    </div>
                                                    <div><p>Отправлено в Тараз</p><p class="date">${statusDB.optionR1 != undefined ? statusDB.optionR1 : ''}</p></div>
                                                </div>

                                                <div class="status_el" style="display: ${statusDB.optionR2 != undefined ? 'flex':'none'};">
                                                <div class="status-ellipse">
                                                    <div class="ellips" style="background-color: ${statusDB.optionR2 != undefined ? '#8faf82':''};"></div>
                                                </div>
                                                <div><p>Отправлено в Кордай</p><p class="date">${statusDB.optionR2 != undefined ? statusDB.optionR2 : ''}</p></div>
                                                </div>
                                                
                                                <div class="status_el" style="display: ${statusDB.optionR3 != undefined ? 'flex':'none'};">
                                                <div class="status-ellipse">
                                                    <div class="ellips" style="background-color: ${statusDB.optionR3 != undefined ? '#8faf82':''};"></div>
                                                </div>
                                                <div><p>Отправлено в Нур-Султан</p><p class="date">${statusDB.optionR3 != undefined ? statusDB.optionR3 : ''}</p></div>
                                                </div>
                                                
                                                <div class="status_el" style="display: ${statusDB.optionR4 != undefined ? 'flex':'none'};">
                                                <div class="status-ellipse">
                                                    <div class="ellips" style="background-color: ${statusDB.optionR4 != undefined ? '#8faf82':''};"></div>
                                                </div>
                                                <div><p>Отправлено в Павлодар</p><p class="date">${statusDB.optionR4 != undefined ? statusDB.optionR4 : ''}</p></div>
                                                </div>



                                                <div class="status_el">
                                                    <div class="status-ellipse">
                                                        <div class="ellips" style="background-color: ${statusDB.option5 != undefined ? '#8faf82':''};"></div>
                                                    </div>
                                                    <div><p>Получено</p><p class="date">${statusDB.option5 != undefined ? statusDB.option5 : ''}</p></div>
                                                </div>
                                            </div>
                                        </div>`;

                                    parentContainer.appendChild(newDiv);
                                   

                                    }

                                });
                        }else{

                            bookmarkEvent = false;
                        }

                        
                        
                        p++
                    }else{
                        p++
                        dataLenght2++
                    }

                   

                }
                if (!bookmarkEvent) {
                    const parentContainer = document.querySelector('.track__container');
                    let newDiv = document.createElement('div');
        
                    newDiv.classList.add('track');
                    newDiv.innerHTML = `
                    <div class="track__header"><h2>${track}</h2><ion-icon class="deleteIcon" onclick="importAndShowClass('${bookmarkID}')" name="close-outline"></ion-icon></div>
                        <div class="track__content">
                            <div class="opisanie"><p class="opisanie__p">${title}</p></div>
                            <div class="status__container">
                                <div class="status_el">
                                    <div class="status-ellipse">
                                        <div class="ellips" style="background-color:#8faf82"></div>
                                    </div>
                                    <div><p>Создан</p><p class="date"></p></div>
                                    
                                </div>
                                
                            </div>
                        </div>`;
        
                    parentContainer.appendChild(newDiv);
                }
            })
            console.log(bookmarkEvent)

            

            i++
        }else{
            i++
            dataLenght++
        }
        
        
        
    }

})


// else{
//     const parentContainer = document.querySelector('.track__container');
//     let newDiv = document.createElement('div');

//     newDiv.classList.add('track');
//     newDiv.innerHTML = `
//     <div class="track__header"><h2>${track}</h2><ion-icon class="deleteIcon" onclick="importAndShowClass('bookmark_id_${i}')" name="close-outline"></ion-icon></div>
//         <div class="track__content">
//             <div class="opisanie"><p class="opisanie__p">${title}</p></div>
//             <div class="status__container">
//                 <div class="status_el">
//                     <div class="status-ellipse">
//                         <div class="ellips" style="background-color:'#8faf82'};"></div>
//                     </div>
//                     <div><p>Создан</p><p class="date"></p></div>
                    
//                 </div>
                
//             </div>
//         </div>`;

//     parentContainer.appendChild(newDiv);
// }
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



let selectElement = document.getElementById("pet__select");
let selectElement2 = document.getElementById("pet__select2");




selectElement.addEventListener('change', ()=>{

    let input = document.getElementById("trackInput");
    
    // С регионам  
    if (selectElement.value === "option4") {
        
        selectElement.setAttribute("disabled", "disabled");
        selectElement2.removeAttribute("disabled");

        input.addEventListener('keydown', function(event) {
            // Код клавиши Enter
            let enterKeyCode = 13;

            // Проверяем, была ли нажата клавиша Enter
            if (event.keyCode === enterKeyCode) {
                // Вызываем вашу функцию, которую вы хотите выполнить при нажатии Enter
                addNewTrack();

            }
        });
          
        
        function addNewTrack() {

            let inputDate = document.getElementById('date');
            let component = inputDate.value.split("-");
            let formattedDate = component[2] + '.' + component[1] + '.' + component[0];
            


            let i = 1;
            let trackEvent = true;

            

                onValue(ref(db, 'parcels/'), (snapshot) => {
                    let dataLenght = (Object.keys(snapshot.val()).length)
            
                    
                    while ( i <= dataLenght && trackEvent === true){
                        let parTex = 'parcels_id_' + i;

                        if (snapshot.val()[parTex] !== undefined) {
                            
                            onValue(ref(db, `parcels/parcels_id_${i}`), (snapshot) => {
                                const track = snapshot.val().track;
                
                                if (document.getElementById('trackInput').value === track) {
                                    console.log(track);
                                    trackEvent = false;
                                    
                                    
                                    
                                }else{
                                    trackEvent = true;    
                                    i++

                                }
                                
                            });

                            console.log(snapshot.val()[parTex])

                        }else{
                            dataLenght++
                            i++
                        }
                        
                        
                    }
                });
   


            
            

            
            let selectedOption = selectElement2.options[selectElement2.selectedIndex];
            let selectedValue = selectedOption.value;

            
            if (selectedValue === 'optionR1') {
                
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR1`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR2') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                .then(() => {
                    console.log('Трек добавлен')
                    // location.reload();
                    input.value = ''
                })
                .catch((error) => {
                    console.log("Ошибка записи в базу данных: ", error);
                });
            set(ref(db, `parcels/parcels_id_${i}/options/optionR2`),formattedDate)
                .then(() => {
                    console.log('Трек добавлен')
                    // location.reload();
                    input.value = ''
                })
                .catch((error) => {
                    console.log("Ошибка записи в базу данных: ", error);
                });
            }else if (selectedValue === 'optionR3') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/optionR3`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'optionR4') {
                
                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                .then(() => {
                    console.log('Трек добавлен')
                    // location.reload();
                    input.value = ''
                })
                .catch((error) => {
                    console.log("Ошибка записи в базу данных: ", error);
                });
            set(ref(db, `parcels/parcels_id_${i}/options/optionR4`),formattedDate)
                .then(() => {
                    console.log('Трек добавлен')
                    // location.reload();
                    input.value = ''
                })
                .catch((error) => {
                    console.log("Ошибка записи в базу данных: ", error);
                });
            }



        };
      


    // Без региона
    } else {


        input.addEventListener('keydown', function(event) {
            // Код клавиши Enter
            let enterKeyCode = 13;

            // Проверяем, была ли нажата клавиша Enter
            if (event.keyCode === enterKeyCode) {
                // Вызываем вашу функцию, которую вы хотите выполнить при нажатии Enter
                addNewTrack2();

            }
        });

        
        selectElement2.setAttribute("disabled", "disabled");
        selectElement.setAttribute("disabled", "disabled");

        function addNewTrack2() {
            

            console.log(input.value);
            
            let inputDate = document.getElementById('date');
            let component = inputDate.value.split("-");
            let formattedDate = component[2] + '.' + component[1] + '.' + component[0];
            

            let i = 1;
            let trackEvent = true;
        
            onValue(ref(db, 'parcels/'), (snapshot) => {
                let dataLenght = (Object.keys(snapshot.val()).length)
        
                
                while ( i <= dataLenght && trackEvent === true){
                    let parTex = 'parcels_id_' + i;
                
                    if (snapshot.val()[parTex] !== undefined) {
                        onValue(ref(db, `parcels/parcels_id_${i}`), (snapshot) => {
                            const track = snapshot.val().track;
                            console.log(track)
                            if (document.getElementById('trackInput').value === track) {
                                console.log(track);
                                trackEvent = false;
                                
                                
                            }else{
                                console.log(document.getElementById('trackInput').value)
    
                                trackEvent = true;
                                
                                i++
                            }
                            
                        });


                    }else{
                        dataLenght++
                        i++
                    }
                    
                    
                }
            });

            
            

            let selectElement = document.querySelector('.pets');
            let selectedOption = selectElement.options[selectElement.selectedIndex];
            let selectedValue = selectedOption.value;
            
            if (selectedValue === 'option1') {

                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/option1`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });

            }else if (selectedValue === 'option2') {

                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/option2`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });

            }else if (selectedValue === 'option3') {

                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/option3`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'option4') {

                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/option4`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }else if (selectedValue === 'option5') {

                set(ref(db, `parcels/parcels_id_${i}/track`),input.value)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
                set(ref(db, `parcels/parcels_id_${i}/options/option5`),formattedDate)
                    .then(() => {
                        console.log('Трек добавлен')
                        // location.reload();
                        input.value = ''
                    })
                    .catch((error) => {
                        console.log("Ошибка записи в базу данных: ", error);
                    });
            }



        };
    }
        

    
    
});

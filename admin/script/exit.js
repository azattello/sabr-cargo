document.querySelector('.exit').addEventListener('click', ()=>{
    localStorage.removeItem('admin');
    window.location.replace("./sign.html");

})
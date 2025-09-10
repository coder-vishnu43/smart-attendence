const inputCheckbox = document.getElementById("inputCheckbox");
const headerPagesMenu = document.querySelector('.headerPagesMenu');

inputCheckbox.addEventListener('change', ()=>{
    if(inputCheckbox.checked){
        headerPagesMenu.classList.add('active');
    }else{
        headerPagesMenu.classList.remove('active');
    }
});

window.addEventListener('DOMContentLoaded', ()=>{
    if(window.innerWidth<768){
    alert("View in desktop mode for better experience");
}
});

const inputCheckbox = document.getElementById("inputCheckbox");
const headerPagesMenu = document.querySelector('.headerPagesMenu');

inputCheckbox.addEventListener('change', ()=>{
    if(inputCheckbox.checked){
        headerPagesMenu.classList.add('active');
    }else{
        headerPagesMenu.classList.remove('active');
    }
});
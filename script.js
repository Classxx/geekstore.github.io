var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

let tg = window.Telegram.WebApp; 

let userid = tg.initDataUnsafe.user.id;

//-----------------------------------------------------------------------------------------


 
document.querySelector('#mobilegameslist').oninput = function(){
    let val = this.value.trim();
    let mobilegameslistItems = document.querySelectorAll('.mobilegameslist li');
    if (val != ''){
        mobilegameslistItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1){
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });

    }
    else {
        mobilegameslistItems.forEach(function(elem){
            elem.classList.remove('hide');
        });
    }
}



//-----------------------------------------------------------------------------------------


 
document.querySelector('#consolegameslist').oninput = function(){
    let val = this.value.trim();
    let consolegameslistItems = document.querySelectorAll('.consolegameslist li');
    if (val != ''){
        consolegameslistItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1){
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });

    }
    else {
        consolegameslistItems.forEach(function(elem){
            elem.classList.remove('hide');
        });
    }
}




//-----------------------------------------------------------------------------------------


 
document.querySelector('#pcgameslist').oninput = function(){
    let val = this.value.trim();
    let pcgameslistItems = document.querySelectorAll('.pcgameslist li');
    if (val != ''){
        pcgameslistItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1){
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });

    }
    else {
        pcgameslistItems.forEach(function(elem){
            elem.classList.remove('hide');
        });
    }
}





//-----------------------------------------------------------------------------------------


 





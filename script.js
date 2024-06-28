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




document.querySelector('#gameslist').oninput = function(){
    let val = this.value.trim();
    let gameslistItems = document.querySelectorAll('.gameslist li');
    if (val != ''){
        gameslistItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1){
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });

    }
    else {
        gameslistItems.forEach(function(elem){
            elem.classList.remove('hide');
        });
    }
}





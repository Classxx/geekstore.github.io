let tg1 = window.Telegram;
  
if(tg1 != undefined){
  if (tg1.WebApp != undefined && tg1.WebApp.initData != undefined);
   
  let safe = tg1.WebApp.initData;
  
  tg1.WebApp.backgroundColor = '#3d3d3d';
  tg1.WebApp.headerColor = '#212121';
  tg1.WebApp.expand(); }
//-----------------------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------------------

let tg = window.Telegram.WebApp; 
let userid = tg.initDataUnsafe.user.id.value;

//-----------------------------------------------------------------------------------------


 
document.querySelector('text_field_input').oninput = function(){
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.games li');
    if (val != ''){
        elasticItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1){
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });

    }
    else {
        elasticItems.forEach(function(elem){
            elem.classList.remove('hide');
        });
    }
}




//-----------------------------------------------------------------------------------------







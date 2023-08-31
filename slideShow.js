const slideItem = document.querySelectorAll(".item");
const dot = document.querySelectorAll(".dot");

let counter = 1;
slideShow(counter);
let timer = setInterval(autoSlide,5000);

function autoSlide(){
    counter += 1;
    slideShow(counter);
}
function plusSlide(num){
    counter += num;
    slideShow(counter);
    resetTimer();
}//按下左右按鈕的動作

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoSlide,5000);
}//當按下左右按鈕或按小圓圈秒數重製

for(let i = 0; i < dot.length; i++){
    dot[i].addEventListener("click", function(){
        slideShow((counter= i + 1));
        resetTimer();
    });
}//按小圓圈的動作

function slideShow(num){
    for(let i = 0; i < slideItem.length; i++){
        slideItem[i].style.display = "none";
    }
    for(let i = 0; i < dot.length; i++){
        dot[i].classList.remove("active");
    }
    if(num > slideItem.length){
        counter = 1;
    }
    if(num < 1){
        counter = slideItem.length;
    }
    slideItem[counter-1].style.display = "block";
    dot[counter-1].classList.add("active");
}

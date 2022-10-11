const CarouselImage = document.querySelector('.image');
const button = document.querySelectorAll('.button');
const numberImage = document.querySelector( '.image img').length;
let imageIndex = 1;
let translateX = 0;

button.forEach(button =>{
    button.addEventListener('click', event => {
        if(event.target.id === 'pervious'){
            if(imageIndex !==1){
                imageIndex--;
                translateX +=1500;
            }
        }else{
            if(imageIndex !== numberImage){
                imageIndex++;
                translateX -= 1500;
            }
        }

        CarouselImage.style.transform =`translateX(${translateX}px)`;
    });
});

$(document).ready(function(){
    $(".navbar .dropdown").click(function(){
        $(this).find("ul").slideToggle("normal");
    });
});
function showRecipe(id) {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }

    var recipe = document.getElementById(id);
    recipe.style.display = "block";
}

function hideRecipe(id) {

     var recipe = document.getElementById(id);
     recipe.style.display = "none";


     var cards = document.getElementsByClassName("card");
     for (var i = 0; i < cards.length; i++) {
         cards[i].style.display = "flex";
     }
}


var slides = document.getElementsByClassName("slide");
var index = 0;

function nextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

function prevSlide() {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}
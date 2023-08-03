function showRecipe(id) {
    // Esconde os cards
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }

    // Mostra a receita
    var recipe = document.getElementById(id);
    recipe.style.display = "block";
}

function hideRecipe(id) {
     // Esconde a receita
     var recipe = document.getElementById(id);
     recipe.style.display = "none";

     // Mostra os cards
     var cards = document.getElementsByClassName("card");
     for (var i = 0; i < cards.length; i++) {
         cards[i].style.display = "flex";
     }
}

// Slider de imagens
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
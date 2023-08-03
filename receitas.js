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

// Formulário de contato
function sendEmail(event) {
    event.preventDefault();
    
    // Obter os valores dos campos do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validar se os campos estão preenchidos
    if (name == "" || email == "" || message == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

        // Enviar um e-mail para o endereço fictício do site
        var subject = "Contato do site Receitas com pimenta biquinho";
        var body = "Nome: " + name + "\nE-mail: " + email + "\nMensagem: " + message;
        var mailto = "mailto:receitas@pimentabiquinho.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    
        // Abrir o cliente de e-mail padrão do usuário
        window.open(mailto, "_blank");
    
        // Limpar os campos do formulário
        document.getElementById("contact-form").reset();
    
        // Exibir uma mensagem de sucesso
        alert("Sua mensagem foi enviada com sucesso. Obrigado pelo seu contato!");
    }
    

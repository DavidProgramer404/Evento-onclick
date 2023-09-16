/* cambie el estado de login a logout */
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("search-button");

    loginButton.addEventListener("click", function() {
        if (loginButton.innerText === "Login") {
            loginButton.innerText = "Logout";
        } else {
            loginButton.innerText = "Login";
        }
    });
});

/* Aumenta los likes al hacer click en el boton  */
document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll(".card-like");

    likeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let currentLikes = parseInt(button.innerText);
            button.innerText = (currentLikes + 1) + " Likes";
            alert("¡This page Says Ninja was liked!");
        });
    });
});

/* Desaparece el botton Add Definition */
document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".buttom-definition");

    addButton.addEventListener("click", function() {
        addButton.style.display = "none";
        
    });
});


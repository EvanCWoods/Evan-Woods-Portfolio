let menuButton = document.getElementById("menu-button");

// add event listener to menu button to show menu options
menuButton.addEventListener("click", function() {
    let menuContainer = document.getElementById("header-menu-container");
    if (menuContainer.style.display == "none") {
        menuContainer.style.display = "block";
    }
    else {
        menuContainer.style.display = "none";
    }
})
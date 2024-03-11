function homepage() {
    hideAllSections();
    document.getElementById("home").style.display = "block";
}
function showOffers() {
    hideAllSections();
    document.getElementById("offers").style.display = "block";
}

function orderNow() {
    hideAllSections();
    document.getElementById("order-now").style.display = "block";
}

function showCart() {
    hideAllSections();
    document.getElementById("cart").style.display = "block";
}

function showSupport() {
    hideAllSections();
    document.getElementById("support").style.display = "block";
}

function trackOrder() {
    hideAllSections();
    document.getElementById("track-order").style.display = "block";
}

function showAbout() {
    hideAllSections();
    document.getElementById("about").style.display = "block";
}

function hideAllSections() {
    var sections = document.querySelectorAll("main section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });
}

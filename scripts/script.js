// Globale declaraties
// Declaratie van alle html elementen die een rol spelen bij het hamburger menu
var icon = document.querySelector(".hamburgerMenu");
var menu = document.querySelector("nav");
var streepBoven = document.getElementById("bovenStreep");
var streepMidden = document.getElementById("middenStreep");
var streepOnder = document.getElementById("onderStreep");

var lijstDieOpent = document.getElementById("dropdown");
var overigeKopjes = document.querySelector(".dropdownchildren");

//eventHandlers
//Deze functie zorgt ervoor dat de hamburgermenu open (en dicht! Tis een toggle ;)) klapt.
function openHamburgerMenu() {
    menu.classList.toggle("open");
    streepBoven.classList.toggle("open");
    streepMidden.classList.toggle("open");
    streepOnder.classList.toggle("open");
}
//Deze functie zorgt ervoor dat de dropdownmenu open (en dicht, TOGGLE!!) klapt.
function openDropdownMenu() {
    overigeKopjes.classList.toggle("show");
}

//eventListeners
//Wanneer je klikt, luistert zowel de icon als de dropdown navigation.
icon.addEventListener('click', openHamburgerMenu);
lijstDieOpent.addEventListener('click', openDropdownMenu);

//Met een beetje hulp van Loutje, omdat ik steeds dingen vergat.

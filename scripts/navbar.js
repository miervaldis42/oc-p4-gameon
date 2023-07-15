/**
 *  Navbar Actions
 */

function editNav() {
  const body = document.querySelector("body");
  const hamburgerMenuIcon = document.querySelector(".fa.fa-bars");
  const hamburgerMenuCloseIcon = document.querySelector(".fa-solid.fa-xmark");
  const navlinks = document.querySelector(".navlinks");

  if (navlinks.style.display === "flex") {
    // Switch the icon from the "x" to the "hamburger" one
    hamburgerMenuCloseIcon.classList.add("fa");
    hamburgerMenuCloseIcon.classList.add("fa-bars");
    hamburgerMenuCloseIcon.classList.remove("fa-solid");
    hamburgerMenuCloseIcon.classList.remove("fa-xmark");

    // Hide the navbar links
    navlinks.style.display = "none";
    navlinks.classList.remove("horizontal-display");

    body.style.background = "none";
  } else {
    // Swith from the "hamburger" icon to the "x" one
    hamburgerMenuIcon.classList.remove("fa");
    hamburgerMenuIcon.classList.remove("fa-bars");
    hamburgerMenuIcon.classList.add("fa-solid");
    hamburgerMenuIcon.classList.add("fa-xmark");

    // Display the navbar links
    navlinks.style.display = "flex";
    navlinks.classList.add("horizontal-display");

    body.style.background = "#2d2d2d";
  }
}

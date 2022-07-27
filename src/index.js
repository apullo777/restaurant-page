// entrypoint for the app
import "./styles/home.css";
import "./styles/pageLoad.css";
import "./styles/animations.css";
import "./functions/parallax";
import home from "./pages/home";
import firstLoad from "./functions/firstLoad";
import clear from "./functions/clear";
import pageLoad from "./functions/pageLoad";

firstLoad();

const homeBtn = document.querySelector("#z-emblem");
const charBtn = document.querySelector("#char-page");
const aboutBtn = document.querySelector("#z-chaser");

homeBtn.addEventListener('click', () => {
    clear();
    home();
    pageLoad();
});

charBtn.addEventListener('click', () => {
    clear();
    char();
    pageLoad();
});

aboutBtn.addEventListener('click', () => {
    clear();
    about();
    pageLoad();
});
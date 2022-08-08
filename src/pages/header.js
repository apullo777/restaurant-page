import zEmblemImg from "../assets/img/zero-logo.png";
import zeroLogo from "../assets/img/z-emblem.webp";
import zChaserImg from "../assets/img/zchaser-logo.png";
// import bgMusic from "../assets/music/theme-of-zero.mp3";

const headerDiv = () => {
    const header = document.createElement("div");
    header.id= "header";

    const zEmblem = document.createElement("img");
    zEmblem.src = zEmblemImg;
    zEmblem.id = "z-emblem";
    header.appendChild(zEmblem);

    const char = document.createElement("img");
    char.src = zeroLogo;
    char.id= "char-page";
    header.appendChild(char);

    const zChaser = document.createElement("img");
    zChaser.src = zChaserImg;
    zChaser.id= "z-chaser";
    header.appendChild(zChaser);

    /* 
    const bgm = document.createElement("audio")
    bgm.setAttribute("controls", "")
    bgm.autoplay = "true"
    const source = document.createElement("source")
    source.src = bgMusic
    source.type = "audio/mp3"
    bgm.appendChild(source);
    header.appendChild(bgm);
    */

    return header;
}

export default headerDiv;
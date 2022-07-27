import zeroImage from "../assets/img/zero-main.png";
import backgroundImage from "../assets/img/bg.png";

const home = () => {
    const content = document.querySelector('#content');

    const background = document.createElement("div");
    background.id="background";
    content.appendChild(background);

    const parallaxContainer = document.createElement("div");
    parallaxContainer.id="parallax-container"

    const spiralContainer = document.createElement("div");
    spiralContainer.id="spiral-container";
    spiralContainer.className="parallax"
    spiralContainer.setAttribute("data-speed", 6);

    const backgroundImg = document.createElement("img");
    backgroundImg.src = backgroundImage;
    backgroundImg.id = "background-digital";
    backgroundImg.className = "parallax";

    spiralContainer.appendChild(backgroundImg);

    // Zero image

    const zeroContainer = document.createElement("div");
    zeroContainer.id="zero-container";
    zeroContainer.className="parallax"
    zeroContainer.setAttribute("data-speed", 20);

    const zero = document.createElement("img");
    zero.src = zeroImage;
    zero.id="zero";
    zero.className="parallax";

    zeroContainer.appendChild(zero);

    parallaxContainer.appendChild(spiralContainer);
    parallaxContainer.appendChild(zeroContainer);

    content.appendChild(parallaxContainer);

    const pageLoad = document.createElement("div");
    pageLoad.className="pageLoad";

    content.appendChild(pageLoad);

    // animated background

    // Some random colors

    const ballContainer = document.createElement("div");
    ballContainer.id="ball-container";
    content.appendChild(ballContainer);

    const colors = ["#3C99DC", "#66D3FA", "#D5F3FE"];

    const numBalls = 300;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random() / 3.3}em`;
        ball.style.height = ball.style.width;
        
        balls.push(ball);
        ballContainer.appendChild(ball)
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
        const to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };
        
        const anim = el.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
                duration: (Math.random() + 1) * 8000, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    });
}

export default home;
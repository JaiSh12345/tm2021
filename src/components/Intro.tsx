import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <section id="intro">
        <canvas></canvas>

        <div className="intro-container wow fadeIn">
          <h1 className="mb-4 pb-0">
            The Annual
            <br />
            <span>Sanganika</span> Fest
          </h1>
          <p className="mb-4 pb-0">6 March, DDU College, Dwarka, New Delhi</p>
          <p className="mb-4 pb-0">
            <a href="https://goo.gl/maps/57JA6C76gQU8xQzeA" target=" ">
              <img width="13px" src="img/map.webp" /> 28°36'18.6"N 77°02'16.9"E
            </a>
          </p>
          <a
            href="https://youtu.be/qCeFEy1hk8s"
            className="venobox play-btn mb-4"
            data-vbtype="video"
            data-autoplay="true"
          ></a>{" "}
          <a
            href="http://portal.techmarathon.in/auth/signUp"
            target="_blank"
            className="about-btn"
          >
            Register
          </a>
        </div>
      </section>
    );
  }
  componentDidMount() {
    // Initialising the canvas
    var canvas: any = document.querySelector("canvas"),
      ctx: any = canvas.getContext("2d");
    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters: any =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    letters = letters.split("");

    // Setting up the columns
    var fontSize = 10,
      columns = canvas.width / fontSize;

    // Setting up the drops
    var drops: any = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#00af00";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }
    console.log("running");
    // Loop the animation
    for (i = 0; i < canvas.height / 9.7; i++) draw();
    setInterval(draw, 50);
  }
}

export default Intro;

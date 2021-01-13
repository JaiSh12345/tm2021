import React from 'react';

class Intro extends React.Component {
    render() {
        return (
            <section id="intro">

                <canvas></canvas>

                <div class="intro-container wow fadeIn">
                    <h1 class="mb-4 pb-0">The Annual<br/><span>Sanganika</span> Fest</h1>
                    <p class="mb-4 pb-0">6 March, DDU College, Dwarka, New Delhi</p>
                    <p class="mb-4 pb-0"><a href="https://goo.gl/maps/57JA6C76gQU8xQzeA" target= " "><img width="13px" src="img/map.webp"/> 28°36'18.6"N 77°02'16.9"E</a></p>
                    <a href="https://youtu.be/qCeFEy1hk8s" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a> <a href="http://portal.techmarathon.in/auth/signUp" target="_blank" class="about-btn">Register</a>
                </div>
                <script src="js/custom.js"></script>
            </section>
        );
    }
}

export default Intro;
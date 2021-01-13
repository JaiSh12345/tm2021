import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <h1><a href="#">TM<span>'21</span></a></h1> </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="#intro">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#schedule">Events</a></li>
                            <li><a href="https://goo.gl/maps/57JA6C76gQU8xQzeA" target="_blank">Venue</a></li>
                            <li><a href="#supporters">Sponsors</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="img/Techmarathon2020 Schedule.pdf">Schedule</a></li>
                            <li className="buy-tickets"><a target="_blank" href="http://portal.techmarathon.in/auth/signUp">Register</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
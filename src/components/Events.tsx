import Event from "./events/Event";
import React from "react";

class Events extends React.Component {
  render() {
    return (
      <section id="schedule" className="wow fadeIn">
        <div className="container">
          <div className="container">
            <div className="section-header">
              <h2>Events</h2>
              <p>Check out our events</p>
            </div>
          </div>

          <div className="">
            <nav id="filter">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a href="#" className="current nav-link" data-filter="*">
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" data-filter=".tech">
                    Technical
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" data-filter=".nontech">
                    Non-Technical
                  </a>
                </li>
                <li className="nav-item" style={{ paddingTop: 15 }}>
                  <a href="#" className="nav-link" data-filter=".code">
                    Coding
                  </a>
                </li>
              </ul>
            </nav>

            <div className="col-md-12">
              <div className="">
                <div className="portfolio-items isotopeWrapper clearfix" id="3">
                  <Event
                    name="Algowl"
                    text="Witty Questionnaire based on algorithms."
                    imsrc="img/events/algowls.webp"
                    id="algowls"
                  />
                  <Event
                    name="LAN Gaming"
                    text="Name says it all ;)"
                    imsrc="img/events/langaming.webp"
                    id="langaming"
                  />
                  <Event
                    name="App Combat"
                    text="Relive the struggle of gradle build. Android App making competition."
                    imsrc="img/events/appcombat.webp"
                    id="appcombat"
                  />
                  <Event
                    name="Snake Jam"
                    text="Nostalgic Snake and Ladders with some techie tweaks."
                    imsrc="img/events/snakejam.webp"
                    id="snakejam"
                  />
                  <Event
                    name="Battle of Bytes"
                    text="Are you good in that infuriating task of de-bugging code?<br/> Battle-of-Bytes is here for you."
                    imsrc="img/events/bob.webp"
                    id="bob"
                  />
                  <Event
                    name="TV Fandom"
                    text="Popular TV shows quiz"
                    imsrc="img/events/tvfandom.webp"
                    id="tvfandom"
                  />
                  <Event
                    name="Tech Wars"
                    text="Quiz based on general knowledge about nerds' world"
                    imsrc="img/events/techwars.webp"
                    id="techwars"
                  />
                  <Event
                    name="Code Benders"
                    text="Enjoy the thrill of competitive coding with our overnight coding event on codechef."
                    imsrc="img/events/codebenders.webp"
                    id="codebenders"
                  />
                  <Event
                    name="Junkyard Wars"
                    text="You like to customize your precious machine with your own hands?<br/>Junkyard Wars is here to test your skills."
                    imsrc="img/events/junkyardwars.webp"
                    id="junkyardwars"
                  />
                  <Event
                    name="Byte Auction"
                    text="Coding event with auctioning on different IDE tools."
                    imsrc="img/events/byteauction.webp"
                    id="byteauction"
                  />
                  <Event
                    name="Tech Charades"
                    text="Classic Charades game with a twist..."
                    imsrc="img/events/techcharades.webp"
                    id="techcharades"
                  />
                  <Event
                    name="Webgators"
                    text="Website Designing Competition"
                    imsrc="img/events/webgators.webp"
                    id="webgators"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Events;

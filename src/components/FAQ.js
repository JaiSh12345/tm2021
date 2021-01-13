import React from 'react';

class FAQ extends React.Component {
    render() {
        return (
            <section id="faq" class="wow fadeInUp">
                <div class="container">
                    <div class="section-header">
                        <h2>F.A.Q </h2> </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-9">
                            <ul id="faq-list">
                                <li> <a data-toggle="collapse" class="collapsed" href="#faq6">How to participate as a team ? <i class="fa fa-minus-circle"></i></a>
                                    <div id="faq6" class="collapse" data-parent="#faq-list">
                                        <p> Each team member need to register individually and from your user panel you can add your team members by entering their mail id. Only one member of the team need to send request in the event they want ti register in. You can have further assistance in the <a href="https://portal.techmarathon.in" target="_blank" style={{all: "initial", color: "#00ff41"}}>portal.techmarathon.in</a> help section or you can contact us. </p>
                                    </div>
                                </li>
                                <li> <a data-toggle="collapse" class="collapsed" href="#faq7">What's new this year ? <i class="fa fa-minus-circle"></i></a>
                                <div id="faq7" class="collapse" data-parent="#faq-list">
                                    <p> We are delighted and proud to announce that we have completed 10 successful years of Tech Marathon (2010-2020). On this occasion we are furthering our efforts to go green by switching to paperless structuring of our events.<br/>
                                        TM'20 is all set to inaugurate its all-new event "Byte Auction" for an exuberant auctioning and coding experience..<br/>
                                        With new zeal and vigour, we are waiting for your participation!!  </p>
                                </div>
                                </li>
                                <li> <a data-toggle="collapse" class="collapsed" href="#faq8">Can we participate in multiple events ? <i class="fa fa-minus-circle"></i></a>
                                <div id="faq8" class="collapse" data-parent="#faq-list">
                                    <p> Yes of course! But make sure the timings do not clash. </p>
                                </div>
                                </li>
                                <li> <a data-toggle="collapse" href="#faq2" class="collapsed">Is participation free ? <i class="fa fa-minus-circle"></i></a>
                                    <div id="faq2" class="collapse" data-parent="#faq-list">
                                        <p> Yes except LAN Gaming, Snake Jam. </p>
                                    </div>
                                </li>
                                <li> <a data-toggle="collapse" href="#faq3" class="collapsed">Which IDE tool will be used for App Combat ? <i class="fa fa-minus-circle"></i></a>
                                    <div id="faq3" class="collapse" data-parent="#faq-list">
                                        <p> Android Studio. </p>
                                    </div>
                                </li>
                                <li> <a data-toggle="collapse" href="#faq4" class="collapsed">Are offline registrations available ? <i class="fa fa-minus-circle"></i></a>
                                    <div id="faq4" class="collapse" data-parent="#faq-list">
                                        <p> Yes, you can even register 10 minutes prior to the beginning of the event. </p>
                                    </div>
                                </li>
                                <li> <a data-toggle="collapse" href="#faq5" class="collapsed">What is the nearest Metro station and how to reach to the campus? <i class="fa fa-minus-circle"></i></a>
                                    <div id="faq5" class="collapse" data-parent="#faq-list">
                                        <p> Nearest metro stations are Dwarka Mor and Dwarka Sector - 14; you can take gramin seva, bus or E-rickshaws from Dwarka Mor and E- rickshaws from Dwarka sector - 14. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FAQ;
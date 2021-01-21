import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <section id="contact" className="section-bg wow fadeInUp">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Got any query message us we will try to answer.</p>
          </div>
          <div className="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <form
              data-bss-recipient="d44090abfbc5382e2075b0fe576497ad"
              role="form"
              className="contactForm"
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validation"></div>
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validation"></div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars of subject"
                />
                <div className="validation"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows={5}
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <div className="validation"></div>
              </div>
              <div className="text-center">
                <button id="submit btn btn-primary" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;

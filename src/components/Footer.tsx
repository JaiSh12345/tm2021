import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="footer-contact">
                <h4 style={{ fontSize: 19 }}>
                  TechMarathon'
                  <a style={{ fontSize: "large", color: "#00ff41" }}>20</a>
                </h4>
                <p>
                  {" "}
                  TechMarathon is the Annual Technical fest hosted by Department
                  of Computer Science - "Sanganika", Deen Dayal Upadhyaya
                  College, University of Delhi. Over the course of 9 years since
                  it's inception, Tech Marathon has grown leaps and bounds and
                  has now become a mature and respected event by the
                  participation from highly reputed colleges of Delhi NCR and
                  sponsors such as HP, Zebronics, codechef and many others.
                  <br />
                  <br /> Comprising of resplendent technical events and amusing
                  non-tech events, it leaves the participants and volunteers in
                  ecstatic wonder and overwhelming rejoice every year. Along
                  with the classical events like Battle of Bytes, Algowls,
                  Techwars, C-benders and engrossing non-tech events such as
                  TVFandom and Tech Charades, we are coming back this March. On
                  6th March, 2020, let's come forth for this technical
                  extravaganza where we guarantee you an experience felt never
                  before!
                  <br />
                  <br /> <strong>Email:</strong>{" "}
                  <a href="mailto:dduc.techmarathon@gmail.com">
                    dduc.techmarathon@gmail.com
                  </a>
                  <br />
                </p>
                <div className="social-links">
                  {" "}
                  <a
                    href="https://twitter.com/dduc_tm"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>{" "}
                  <a
                    href="https://m.facebook.com/techmarathon/?__tn__=C-R"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>{" "}
                  <a
                    href="https://instagram.com/sanganika_dduc"
                    target="_blank"
                    className="instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            {" "}
            &copy; Copyright <strong>Sanganika</strong>. All Rights Reserved{" "}
          </div>
          <div className="credits">
            {" "}
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/ankit-kumar-4b6714161"
              target="_blank"
            >
              Ankit Kumar
            </a>{" "}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

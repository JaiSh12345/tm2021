import React from "react";

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>About The Event</h2>
              <p>
                TechMarathon is an annual technical fest hosted by Department of
                computer science, Deen Dayal Upadhyaya College, University of
                Delhi. Comprising of respledent technical events and amusing
                non-tech events, it leaves the participant and volunteers in
                ecstatic wonder and overwhelming rejoice every year. On 6th
                Match let's come forth for this technical extravaganza where we
                guarantee you an experience felt never before.
              </p>
            </div>
            <div className="col-lg-3">
              <h3>Where</h3>
              <p>Deen Dayal Upadhyaya College, Dwarka sec-3, New Delhi</p>
            </div>
            <div className="col-lg-3">
              <h3>When</h3>
              <p>
                Friday <br /> 6 March
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

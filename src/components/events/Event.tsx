import React from "react";

class Event extends React.Component<any, any> {
  render() {
    return (
      <div>
        <article id="pitem" className="col-md-4 isotopeItem tech">
          <div className="portfolio-item">
            <a>
              <img src={this.props.imsrc} />
            </a>
            <div className="portfolio-desc align-center">
              <div className="folio-info">
                <a>
                  <h3>{this.props.name}</h3>
                  <br />
                  {this.props.text}
                </a>
                <div className="text-center" style={{ paddingTop: 70 }}>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target={'#'+this.props.id}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div id={this.props.id} className="modal fade">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div id="eventname">
                <h4>{this.props.name}</h4>
              </div>

              <div className="modal-text">
                <div className="modal-body">
                  <p>
                    <h5 className="h ">
                      Ride across the AVL trees and accomplish the quest of
                      balancing. Use Dijkstra and find the shortest path to the
                      treasure. Use algorithms to unravel the mysteries of the
                      question mark. Dynamic programming will be your light that
                      will help you survive. Read the map of Matrix and follow
                      the stars aligned in Complex Graphs to reach the final
                      level of solution. But remember to carry your sword of
                      optimization all along.
                      <br />
                      <br />
                      Presenting to you all Algowls- "striving for solutions
                      using algorithms".
                    </h5>
                    <br />
                    <br />

                    <h5 className="h b">Rounds :</h5>
                    <ul className="h">
                      <li style={{ listStyleType: "none" }}>
                        <b>Prelims :</b>
                        <ul>
                          <li style={{ listStyleType: "none" }}>
                            Duration : 20 minutes
                          </li>
                          <li style={{ listStyleType: "none" }}>
                            This round consists of 25 MCQs
                          </li>
                          p{" "}
                          <li style={{ listStyleType: "none" }}>
                            Questions will be based on standard algorithms and
                            its analysis.{" "}
                          </li>
                          <li style={{ listStyleType: "none" }}>
                            There will be negative marking for incorrect answer.{" "}
                          </li>
                        </ul>
                      </li>
                      <br />
                      <li style={{ listStyleType: "none" }}>
                        <b>Finals :</b>
                        <ul>
                          <li style={{ listStyleType: "none" }}>
                            Duration: 1 hr
                          </li>
                          <li style={{ listStyleType: "none" }}>
                            It will consist of 4 problems to be solved
                            subjectively.
                          </li>
                          <li style={{ listStyleType: "none" }}>
                            Problems will be based on standard algorithms.{" "}
                          </li>
                          <li style={{ listStyleType: "none" }}>
                            The evaluation of solution will be done on the basis
                            of feasibility, optimality, running time complexity
                            and space complexity of the solutions.{" "}
                          </li>
                        </ul>
                      </li>
                      <br />
                    </ul>
                    <h5 className="h b">RULES AND REGULATIONS :</h5>
                    <ul className="h">
                      <li>
                        It is a team based event. Each team can have a maximum
                        of 2 members.{" "}
                      </li>
                      <li>
                        Use of Internet, pen-drives or any sort of helping
                        material is strictly prohibited.
                      </li>
                      <li>
                        All the teams must be present at the specified room/lab
                        on time.
                      </li>
                      <li>
                        The decision of the organizers shall be final and
                        binding. Organizers have the right to disqualify any
                        team if they break any rules.
                      </li>
                    </ul>
                    <br />
                    <h5 className="h b">For details contact event heads:</h5>
                    <h5 className="h">
                      Riddhi kawatra :{" "}
                      <a href="tel:+919818496613">9818496613</a>
                      <br />
                      Sachin Kumar Singh :{" "}
                      <a href="tel:+918290626770">8290626770</a>
                      <br />
                      Vipin Kaushik : <a href="tel:+919817263534">9817263534</a>
                      <br />
                    </h5>
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;

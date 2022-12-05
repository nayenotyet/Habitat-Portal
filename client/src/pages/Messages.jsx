import React from "react";
import HeadNav from "../components/HeadNav";
import LeftNav from "../components/LeftNav";

function Messages() {
    return (
        <div>
            {HeadNav()}
            <div className="d-flex container h-90">
                {LeftNav()}

                        <div className="mx-10 mt-5 card">
                            <div className="card-body" data-mdb-perfect-scrollbar="true">

                                <div className="d-flex justify-content-between">
                                    <p className="small mb-1">Timona Siera</p>
                                    <p className="small mb-1 text-muted">23 Jan 2:00 pm</p>
                                </div>
                                <div className="d-flex flex-row justify-content-start">
                                            <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-lightblue">
                                                For what reason would it
                                                be advisable for me to think about business content?</p>
                                </div>


                                <div className="d-flex justify-content-between">
                                    <p className="small mb-1 text-muted">23 Jan 2:05 pm</p>
                                    <p className="small mb-1">Johny Bullock</p>
                                </div>
                                <div className="d-flex flex-row justify-content-end">
                                    <div>
                                        <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-lightgreen">Thank you for
                                            your believe in
                                            our
                                            supports</p>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-between">
                                    <p className="small mb-1">Timona Siera</p>
                                    <p className="small mb-1 text-muted">23 Jan 5:37 pm</p>
                                </div>
                                <div className="d-flex flex-row justify-content-start">
                                        <div>
                                            <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-lightblue">
                                                Lorem ipsum dolor
                                                sit amet
                                                consectetur adipisicing elit similique quae consequatur</p>
                                        </div>
                                </div>


                                <div className="d-flex justify-content-between">
                                    <p className="small mb-1 text-muted">23 Jan 6:10 pm</p>
                                    <p className="small mb-1">Johny Bullock</p>
                                </div>
                                <div className="d-flex flex-row justify-content-end">
                                    <div>
                                        <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-lightgreen">Dolorum quasi
                                            voluptates quas
                                            amet in
                                            repellendus perspiciatis fugiat</p>
                                    </div>
                                </div>


                            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control" placeholder="Type message"
                                           aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                    <button className="bg-secondary btn text-light" type="button" id="button-addon2">
                                        Send
                                    </button>
                                </div>
                            </div>

                            </div>
                        </div>

            </div>
            </div>
    );
}

export default Messages;
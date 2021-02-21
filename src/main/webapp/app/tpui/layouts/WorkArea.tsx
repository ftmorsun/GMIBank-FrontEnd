import React, {Component} from "react";
import {Link} from "react-router-dom";

class WorkArea extends Component<{},{}> {
    render() {
        return (
            <div className="work-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title section-title-2">
                                <h6 className="subtitle subtitle-thumb">Best Services</h6>
                                <h2 className="title">How It Works</h2>
                                <p>Bankdipscing elitr, sed diam nonumy eirmod et accusam et justo duo dolores et ea rebum. tet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work mt-0 text-center">
                                <div className="work-icon">
                                    <img className="" src="content/assets/img/work/01.png" alt="icon" />
                                </div>
                                <h5><Link className=" initiate-scripts" to={'/services'}>Know About</Link></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                <Link className="angle-btn initiate-scripts" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work mt-md-0 text-center">
                                <div className="work-icon">
                                    <img className="" src="content/assets/img/work/02.png" alt="icon" />
                                </div>
                                <h5><Link className=" initiate-scripts" to={'/services'}>Create Account</Link></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                <Link className="angle-btn initiate-scripts" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work text-center">
                                <div className="work-icon">
                                    <img className="" src="content/assets/img/work/03.png" alt="icon" />
                                </div>
                                <h5><Link className=" initiate-scripts" to={'/services'}>Start Invest</Link></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                <Link className="angle-btn" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-work text-center">
                                <div className="work-icon">
                                    <img className="" src="content/assets/img/work/04.png" alt="icon" />
                                </div>
                                <h5><Link className=" initiate-scripts" to={'/services'}>Get Profit</Link></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                <Link className="angle-btn initiate-scripts" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkArea;
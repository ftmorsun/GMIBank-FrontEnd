import React, {Component} from "react";
import {Link} from "react-router-dom";

class ServiceArea extends Component<{},{}>  {
    render() {
        return (
            <div className="service-area default-pd">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title">
                                <h6 className="subtitle subtitle-thumb">Best Services</h6>
                                <h2 className="title">Presenting Banking Plan & Services That are Right For You</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <div className="thumb">
                                    <img src="content/assets/img/service/01.png" alt="img" />
                                </div>
                                <div className="service-details">
                                    <h5><Link className="initiate-scripts" to={'/services'}>Online Business</Link></h5>
                                    <p>Lorem ipsum dolor sit ametcteturs adipiscing elieiusi ncididunt ut labore et dol oremagna.</p>
                                    <Link className="angle-btn initiate-scripts" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <div className="thumb">
                                    <img src="content/assets/img/service/02.png" alt="img" />
                                </div>
                                <div className="service-details">
                                    <h5><Link className="initiate-scripts" to={'/services'}>Business Plan</Link></h5>
                                    <p>Lorem ipsum dolor sit ametcteturs adipiscing elieiusi ncididunt ut labore et dol oremagna.</p>
                                    <Link className="angle-btn initiate-scripts" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <div className="thumb">
                                    <img src="content/assets/img/service/03.png" alt="img" />
                                </div>
                                <div className="service-details">
                                    <h5><Link className="initiate-scripts" to={'/services'}>Mobile Bank</Link></h5>
                                    <p>Lorem ipsum dolor sit ametcteturs adipiscing elieiusi ncididunt ut labore et dol oremagna.</p>
                                    <Link className="angle-btn initiate-scripts" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <div className="thumb">
                                    <img src="content/assets/img/service/04.png" alt="img" />
                                </div>
                                <div className="service-details">
                                    <h5><Link className="initiate-scripts" to={'/services'}>Online Deposit</Link></h5>
                                    <p>Lorem ipsum dolor sit ametcteturs adipiscing elieiusi ncididunt ut labore et dol oremagna.</p>
                                    <Link className="angle-btn initiate-scripts" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <div className="thumb">
                                    <img src="content/assets/img/service/05.png" alt="img" />
                                </div>
                                <div className="service-details">
                                    <h5><Link className="initiate-scripts" to={'/services'}>Credit Card</Link></h5>
                                    <p>Lorem ipsum dolor sit ametcteturs adipiscing elieiusi ncididunt ut labore et dol oremagna.</p>
                                    <Link className="angle-btn initiate-scripts" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-service">
                                <div className="thumb">
                                    <img src="content/assets/img/service/06.png" alt="img" />
                                </div>
                                <div className="service-details">
                                    <h5><Link className="initiate-scripts" to={'/services'}>Income Monitoring</Link></h5>
                                    <p>Lorem ipsum dolor sit ametcteturs adipiscing elieiusi ncididunt ut labore et dol oremagna.</p>
                                    <Link className="angle-btn initiate-scripts" to={'/services'}><img src="content/assets/img/icon/angle-left-round.png" alt="icon" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceArea;
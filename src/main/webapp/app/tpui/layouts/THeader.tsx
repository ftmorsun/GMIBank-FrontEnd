import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from 'reactstrap'

class THeader extends Component<{},{}> {
    render() {
        return (
            <div className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 align-self-center">
                            <div className="logo d-lg-inline-block d-none">
                            <h5><i className="fa fa-map-marker" />908 Radic Road, NewYork, USA.</h5>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 text-lg-right text-center">
                            <div className="media d-sm-inline-flex m-0">
                                <div className="media-left align-self-center">
                                <img src="content/assets/img/icon/phone.png" alt="phone" />
                                </div>
                                <div className="media-body text-left">
                                    <p>Free Call To Us:</p>
                                    <p>+5 (87) 8695-312</p>
                                </div>
                            </div>
                            <div className="media d-sm-inline-flex">
                                <div className="media-left align-self-center">
                                    <img src="content/assets/img/icon/clock.png" alt="phone" />
                                </div>
                                <div className="media-body text-left">
                                    <p>Open Time: </p>
                                    <p>Mon-Sat (10 AM - 6 PM)</p>
                                </div>
                            </div>
                             {/* <Link to="/account/register"><Button  className="btn btn-round d-lg-inline-block d-none">Apply for an Account</Button></Link>  */}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default THeader;
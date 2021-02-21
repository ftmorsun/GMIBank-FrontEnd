import React, {Component} from "react";
import Section from "./layouts/Section";
import PricingArea from "./layouts/PricingArea";
import WorkArea from "./layouts/WorkArea";
import PartnerArea from "./layouts/PartnerArea";
import {Link} from "react-router-dom";
import ApplyLoanArea from "./layouts/ApplyLoanArea";

class Loan extends Component<{},{}> {
    render() {
        return (
            <Section breadcrumb={true} title={'Loan'}>
                <div className="pricing-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <div className="section-title">
                                    <h6 className="subtitle subtitle-thumb">Loan Plan</h6>
                                    <h2 className="title">What we offer for you</h2>
                                    <p>We provide online instant cash loans with quick approval that suit your term.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-price text-center">
                                    <div className="pricing-details">
                                        <h2 className="pricing-cost">Home Loan</h2>
                                        <h6 className="pricing-subtitle">Best for you</h6>
                                        <h4 className="pricing-title">$5000-$10000</h4>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><Link className="initiate-scripts" to={'/loan'}>Borrow - $350 over 3 months</Link></li>
                                        <li><Link className="initiate-scripts" to={'/loan'}>Interest rate - 292% pa fixed</Link></li>
                                        <li><Link className="initiate-scripts" to={'/loan'}>Total amount payable - $500.25</Link></li>
                                        <li><Link className="initiate-scripts" to={'/loan'}>Representative - 1,286% APR</Link></li>
                                        <li><Link className="btn btn-blue" to={'/loan'}>Apply Now</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-price text-center">
                                    <div className="pricing-details">
                                        <h2 className="pricing-cost">Car Loan</h2>
                                        <h6 className="pricing-subtitle">Best for you</h6>
                                        <h4 className="pricing-title">$5000-$10000</h4>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><Link className="initiate-scripts" to={'/loan'}>Borrow - $350 over 3 months</Link></li>
                                        <li><Link className="initiate-scripts" to={'/loan'}>Interest rate - 292% pa fixed</Link></li>
                                        <li><Link className="initiate-scripts" to={'/loan'}>Total amount payable - $500.25</Link></li>
                                        <li><Link className="initiate-scripts" to={'/loan'}>Representative - 1,286% APR</Link></li>
                                        <li><Link className="btn btn-blue" to={'/loan'}>Apply Now</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-price text-center">
                                    <div className="pricing-details">
                                        <h2 className="pricing-cost">Education Loan</h2>
                                        <h6 className="pricing-subtitle">Best for you</h6>
                                        <h4 className="pricing-title">$5000-$10000</h4>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><Link className="initiate-scripts" to={'/loan'}>Borrow - $350 over 3 months</Link></li>
                                        <li><Link className="initiate-scripts" to={'/loan'}>Interest rate - 292% pa fixed</Link></li>
                                        <li><Link className="initiate-scripts" to={'/loan'}>Total amount payable - $500.25</Link></li>
                                        <li><Link className="initiate-scripts" to={'/loan'}>Representative - 1,286% APR</Link></li>
                                        <li><Link className="btn btn-blue" to={'/loan'}>Apply Now</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <ApplyLoanArea />


                <PricingArea />


                <WorkArea />


                <PartnerArea />
            </Section>
        );
    }
}

export default Loan;
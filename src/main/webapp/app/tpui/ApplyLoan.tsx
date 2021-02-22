import React, {Component} from "react";
import Section from "./layouts/Section";
import ApplyLoanArea from "./layouts/ApplyLoanArea";
import PricingArea from "./layouts/PricingArea";
import PartnerArea from "./layouts/PartnerArea";

class ApplyLoan extends Component<{},{}> {
    render() {
        return (
            <Section breadcrumb={true} title={'Apply Loan'}>
                <div className="apply_form_area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <form action="#" className="apply_form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="apply_info_text text-center">
                                                <h3>How much do you want?</h3>
                                                <p>We provide online instant cash loans with quick approval that suit your term length</p>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_field">
                                                <input type="text" placeholder="Your name" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_field">
                                                <input type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_field">
                                                <input type="text" placeholder="Phone no." />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_field">
                                                <select className="wide">
                                                    <option data-display="Purpose">Purpose</option>
                                                    <option value="1">Purpose 1</option>
                                                    <option value="2">Purpose 2</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_field">
                                                <select className="wide">
                                                    <option data-display="Amount">Amount</option>
                                                    <option value="1">$1000</option>
                                                    <option value="2">$2000</option>
                                                    <option value="3">$3000</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_field">
                                                <input type="text" placeholder="Month" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="pay_text">
                                                <p>You have to pay: <span>$0</span></p>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_field">
                                                <textarea name="#" cols={30} rows={10} placeholder="Message" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="submit_btn">
                                                <button className="btn btn-blue" type="submit">Apply Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Apply Loan Area Imported from Layouts */}
                <ApplyLoanArea />

                {/* Pricing Area Imported from Layouts */}
                <PricingArea />

                {/* Partner Area Imported from Layouts */}
                <PartnerArea />
            </Section>
        );
    }
}

export default ApplyLoan;
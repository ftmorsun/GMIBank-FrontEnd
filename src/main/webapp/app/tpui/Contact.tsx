import React, {Component} from "react";
import Section from "./layouts/Section";

class Contact extends Component<{},{}> {
    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <Section breadcrumb={true} title={'Contact'}>
                {/* contact page conten area start */}
                <div className="contact-page-content-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info-box">
                                    <div className="icon">
                                        <i className="fa fa-map-marker" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Address:</h4>
                                        <span className="details"> St. Zip. Encinitas. 260-C North El Camino,  USA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info-box">
                                    <div className="icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Phone & Fax</h4>
                                        <span className="details">(888) 123-4567</span>
                                        <span className="details">(123) 123-4567</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-contact-info-box">
                                    <div className="icon">
                                        <i className="fa fa-envelope" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Email Address</h4>
                                        <span className="details">support@example.com</span>
                                        <span className="details">info@example.com</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-map">
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                            <iframe title="google map" id="gmap_canvas" src="https://maps.google.com/maps?q=Sheikh%20Tower%2C%20%20Bogra%205800&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact page conten area end */}

                {/* contact area start */}
                <section className="contact-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-bottom-inner">
                                    {/* contact bottom inner */}
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="form-content-area">
                                                {/* right content area */}
                                                <h3 className="title text-center">Contact Us</h3>
                                                <div className="contact-form-wrapper">
                                                    <form method="POST" id="contact_form" className="contact-form">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-element ">
                                                                    <input type="text" id="name" name="name" placeholder="Name" className="input-field borderd" />
                                                                </div>
                                                                <div className="form-element ">
                                                                    <input type="email" id="email" name="email" placeholder="Email" className="input-field borderd" />
                                                                </div>

                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-element ">
                                                                    <input type="text" id="company" name="company" placeholder="Company" className="input-field borderd" />
                                                                </div>
                                                                <div className="form-element ">
                                                                    <input type="tel" id="phone" name="phone" placeholder="Phone Number" className="input-field borderd" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <textarea rows={10} cols={30} id="message" name="message" placeholder="How can we help?" className="input-field borderd textarea" />
                                                            </div>
                                                        </div>
                                                        <input type="submit" className="btn btn-blue" value="Send a Message" />
                                                    </form>
                                                </div>
                                            </div>
                                            {/* //.right content area */}
                                        </div>
                                    </div>
                                </div>
                                {/* contact bottom inner */}
                            </div>
                            {/* //.col-lg-12 */}
                        </div>
                    </div>
                </section>
                {/* contact area end */}
            </Section>
        );
    }
}

export default Contact;
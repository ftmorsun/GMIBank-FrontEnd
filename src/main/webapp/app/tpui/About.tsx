import React, {Component} from "react";
import Section from "./layouts/Section";
import AboutArea from "./layouts/AboutArea";
import ServiceArea from "./layouts/ServiceArea";
import PricingArea from "./layouts/PricingArea";
import WorkArea from "./layouts/WorkArea";
import PartnerArea from "./layouts/PartnerArea";

class About extends Component<{},{}> {
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <Section breadcrumb={true} title={'About Us'}>
                <AboutArea  />
                <ServiceArea />
                <PricingArea />
                <WorkArea />
                <PartnerArea />
            </Section>
        );
    }
}

export default About;
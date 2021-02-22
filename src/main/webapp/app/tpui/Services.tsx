import React, {Component} from "react";
import Section from "./layouts/Section"
import ServiceArea from "./layouts/ServiceArea";
import PricingArea from "./layouts/PricingArea";
import WorkArea from "./layouts/WorkArea";
import PartnerArea from "./layouts/PartnerArea";
import ClientArea from "./layouts/ClientArea";

class Services extends Component<{},{}> {
    render() {
        return (
            <Section breadcrumb={true} title={'Services'}>
                <ServiceArea />
                <PricingArea />
                <WorkArea />
                <ClientArea />
                <PartnerArea />
            </Section>
        );
    }
}

export default Services;
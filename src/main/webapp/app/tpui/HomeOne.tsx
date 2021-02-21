import React, { useEffect } from 'react';
import Section from "./layouts/Section";
import Banner from "./layouts/Banner";
import MoneyOption from "./layouts/MoneyOption";
import AboutArea from "./layouts/AboutArea";
import ServiceArea from "./layouts/ServiceArea";
import PricingArea from "./layouts/PricingArea";
import FunFactArea from "./layouts/FunFactArea";
import TransactionArea from "./layouts/TransactionArea";
import WorkArea from "./layouts/WorkArea";
import PaymentArea from "./layouts/PaymentArea";
import InvestorArea from "./layouts/InvestorArea";
import BlogArea from "./layouts/BlogArea";
import PartnerArea from "./layouts/PartnerArea";

const HomeOne = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect((): void => {
        window.scrollTo(0, 0);
        return;
    });


    return (
        <Section title="Home" breadcrumb={false}>
            <Banner />
            <MoneyOption />
            <AboutArea />
            <ServiceArea />
            <PricingArea />
            <FunFactArea />
            <TransactionArea />
            <WorkArea />
            <PaymentArea />
            <InvestorArea />
            <BlogArea />
            <PartnerArea />
        </Section>
    );
}

export default HomeOne;
import React, {Component} from "react";
import Preloader from "./Preloader";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import Topbar from "./Topbar";
import Header from "./THeader";
import Navbar from "./TNavbar";
import BreadcrumbArea from "./BreadcrumbArea";
import Footer from "./Footer";
import SignupArea from "./SignupArea";


interface SectionProps {
    title:string
    breadcrumb:boolean
}

class Section extends Component<SectionProps,{}>  {
    render() {
        return (
            <div>
                {this.props.breadcrumb ? (<BreadcrumbArea title={this.props.title} />) : ''}
                {this.props.children}
                <SignupArea />
            </div>
        );
    }
}

export default Section;
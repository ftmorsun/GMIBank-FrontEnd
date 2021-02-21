import React, {Component} from "react";
import {Link} from "react-router-dom";

type BreadcrumbAreaState={
    name:string
}

interface BreadcrumbAreaProps {
    title:string
}

class BreadcrumbArea extends Component<BreadcrumbAreaProps, BreadcrumbAreaState> {
    render() {
        return (
            <div className="breadcrumb_area">
                <div className="breadcrumb_inner d-flex align-items-center">
                    <div className="container">
                        <div className="breadcrumb_content">
                            <h2>{this.props.title}</h2>
                            <div className="page_link">
                                <Link className="initiate-scripts" to={'/'}>Home</Link>
                                <Link className="initiate-scripts" to={'/'}>{this.props.title}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BreadcrumbArea;
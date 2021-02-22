import React, {Component} from "react";
import {Link} from "react-router-dom";
import Section from "./layouts/Section";
import BlogSidebarArea from "./layouts/BlogSidebarArea";

class Blog extends Component<{},{}> {


    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <Section breadcrumb={true} title={'News'}>
                <div className="blog_area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-5 mb-lg-0">
                                <div className="blog_left_sidebar">
                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="content/assets/img/blog/single_blog_1.png" alt="img" />
                                            <Link to={'/blog'} className="blog_item_date initiate-scripts">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </Link>
                                        </div>

                                        <div className="blog_details">
                                            <Link to={'/blog-single'} className="d-inline-block initiate-scripts">
                                                <h2>You’re Making More Money. Here’s How to Save</h2>
                                            </Link>
                                            <p>{"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."}</p>
                                            <ul className="blog-info-link">
                                                <li><Link className="initiate-scripts" to={'/blog'}><i className="fa fa-user" /> Money, Investment</Link></li>
                                                <li><Link className="initiate-scripts" to={'/blog'}><i className="fa fa-comments" /> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="content/assets/img/blog/single_blog_2.png" alt="img" />
                                            <Link to={'/blog'} className="blog_item_date initiate-scripts">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </Link>
                                        </div>

                                        <div className="blog_details">
                                            <Link to={'/blog-single'} className="d-inline-block initiate-scripts">
                                                <h2>You’re Making More Money. Here’s How to Save</h2>
                                            </Link>
                                            <p>{"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."}</p>
                                            <ul className="blog-info-link">
                                                <li><Link className="initiate-scripts" to={'/blog'}><i className="fa fa-user" /> Money, Investment</Link></li>
                                                <li><Link className="initiate-scripts" to={'/blog'}><i className="fa fa-comments" /> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="content/assets/img/blog/single_blog_3.png" alt="img" />
                                            <Link to={'/blog'} className="blog_item_date initiate-scripts">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </Link>
                                        </div>

                                        <div className="blog_details">
                                            <Link to={'/blog-single'} className="d-inline-block initiate-scripts">
                                                <h2>You’re Making More Money. Here’s How to Save</h2>
                                            </Link>
                                            <p>{"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."}</p>
                                            <ul className="blog-info-link">
                                                <li><Link className="initiate-scripts" to={'/blog'}><i className="fa fa-user" /> Money, Investment</Link></li>
                                                <li><Link className="initiate-scripts" to={'/blog'}><i className="fa fa-comments" /> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                </div>
                            </div>
                            <div className="col-lg-4">

                                {/* Blog Sidebar Area Imported from Layouts */}
                                <BlogSidebarArea />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Blog;
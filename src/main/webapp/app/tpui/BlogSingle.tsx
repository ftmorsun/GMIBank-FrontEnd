import React, {Component} from "react";
import Section from "./layouts/Section";
import {Link} from "react-router-dom";
import BlogSidebarArea from "./layouts/BlogSidebarArea";

class BlogSingle extends Component<{},{}> {
    render() {
        return (
            <Section breadcrumb={true} title={'News'}>
                <section className="blog_area single-post-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="feature-img">
                                        <img className="img-fluid" src="content/assets/img/blog/single_blog_1.png" alt="img" />
                                    </div>
                                    <div className="blog_details">
                                        <h2>Help and guidance: Personal Financial Advice Service
                                        </h2>
                                        <ul className="blog-info-link mt-3 mb-4">
                                            <li><Link className="initiate-scripts" to={'/blog-single'}><i className="fa fa-user" /> Travel, Lifestyle</Link></li>
                                            <li><Link className="initiate-scripts" to={'/blog-single'}><i className="fa fa-comments" /> 03 Comments</Link></li>
                                        </ul>
                                        <p className="excert">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower </p>
                                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
                                        <div className="quote-wrapper">
                                            <div className="quotes">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.</div>
                                        </div>
                                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower</p>
                                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually</p>
                                    </div>
                                </div>
                                <div className="navigation-top">
                                    <div className="d-sm-flex justify-content-between">
                                        <p className="like-info"><span className="align-middle"><i className="fa fa-heart" /></span> Lily and 4 people like this</p>
                                        <div className="col-sm-4 text-center my-2 my-sm-0">
                                        </div>
                                        <ul className="social-icons">
                                            <li><Link className="initiate-scripts" to={'/blog-single'}><i className="fa fa-facebook-f" /></Link></li>
                                            <li><Link className="initiate-scripts" to={'/blog-single'}><i className="fa fa-twitter" /></Link></li>
                                            <li><Link className="initiate-scripts" to={'/blog-single'}><i className="fa fa-dribbble" /></Link></li>
                                            <li><Link className="initiate-scripts" to={'/blog-single'}><i className="fa fa-behance" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="navigation-area">
                                        <div className="row">
                                            <div
                                                className="col-lg-6 col-sm-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                                <div className="thumb">
                                                    <Link className="initiate-scripts" to={'/blog-single'}>
                                                        <img className="img-fluid" src="content/assets/img/post/preview.png" alt="img" />
                                                    </Link>
                                                </div>
                                                <div className="arrow">
                                                    <Link className="initiate-scripts" to={'/blog-single'}>
                                                        <span className="lnr text-white ti-arrow-left" />
                                                    </Link>
                                                </div>
                                                <div className="detials">
                                                    <p>Prev Post</p>
                                                    <Link className="initiate-scripts" to={'/blog-single'}>
                                                        <h4>Personal Financial</h4>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div
                                                className="col-lg-6 col-sm-6 col-12 nav-right flex-row d-flex justify-content-sm-end align-items-center">
                                                <div className="detials">
                                                    <p>Next Post</p>
                                                    <Link className="initiate-scripts" to={'/blog-single'}>
                                                        <h4>Making Money</h4>
                                                    </Link>
                                                </div>
                                                <div className="arrow">
                                                    <Link className="initiate-scripts" to={'/blog-single'}>
                                                        <span className="lnr text-white ti-arrow-right" />
                                                    </Link>
                                                </div>
                                                <div className="thumb">
                                                    <Link className="initiate-scripts" to={'/blog-single'}>
                                                        <img className="img-fluid" src="content/assets/img/post/next.png" alt="img" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-author">
                                    <div className="media align-items-center">
                                        <img src="content/assets/img/blog/author.png" alt="img" />
                                        <div className="media-body">
                                            <Link className="initiate-scripts" to={'/blog-single'}>
                                                <h4>Harvard milan</h4>
                                            </Link>
                                            <p>{"Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-area">
                                    <h4>05 Comments</h4>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="content/assets/img/comment/comment_1.png" alt="img" />
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5><Link className="initiate-scripts" to={'/blog-single'}>Emilly Blunt</Link></h5>
                                                            <p className="date">March 12, 2020 at 3:12 pm </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <Link to={'/blog-single'} className="btn-reply text-uppercase initiate-scripts">reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="content/assets/img/comment/comment_2.png" alt="img" />
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5><Link className="initiate-scripts" to={'/blog-single'}>Emilly Blunt</Link></h5>
                                                            <p className="date">March 12, 2020 at 3:12 pm </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <Link to={'/blog-single'} className="btn-reply text-uppercase initiate-scripts">reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="content/assets/img/comment/comment_3.png" alt="img" />
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser</p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5><Link className="initiate-scripts" to={'/blog-single'}>Emilly Blunt</Link></h5>
                                                            <p className="date">March 12, 2020 at 3:12 pm </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <Link to={'/blog-single'} className="btn-reply text-uppercase initiate-scripts">reply</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form">
                                    <h4>Leave a Reply</h4>
                                    <form className="form-contact comment_form" action="#" id="commentForm">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Write Comment" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input className="form-control" name="phone" id="phone" type="text" placeholder="Phone" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-blue button-contactForm btn_1 boxed-btn">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">

                                {/* Blog Sidebar Area Imported from Layouts */}
                                <BlogSidebarArea />
                            </div>
                        </div>
                    </div>
                </section>
            </Section>
        );
    }
}

export default BlogSingle;
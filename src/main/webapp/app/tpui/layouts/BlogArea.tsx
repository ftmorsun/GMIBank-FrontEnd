import React, {Component} from "react";
import {Link} from "react-router-dom";

type BlogAreaState={
    name:string
}

class BlogArea extends Component<{}, BlogAreaState>  {
    
    render() {
        return (
            <div className="blog-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title section-title-2">
                                <h6 className="subtitle subtitle-thumb">News</h6>
                                <h2 className="title">Your news and information</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <div className="thumb">
                                        <img src="content/assets/img/blog/01.png" alt="img" />
                                    <div className="date">05-May-2020</div>
                                </div>
                                <div className="blog-details">
                                    <ul className="post-meta">
                                        <li><i className="fa fa-user-o" />Post By: RT Shuvro</li>
                                        <li className="type"><img src="content/assets/img/blog/icon01.png" alt="icon" />Business</li>
                                    </ul>
                                    <h6><Link className="initiate-scripts" to={'/blog-single'}>How to invest and get money form E-Banking</Link></h6>
                                    <Link className="btn btn-round initiate-scripts" to={'/blog-single'}>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <div className="thumb">
                                    <img src="content/assets/img/blog/02.png" alt="img" />
                                    <div className="date">05-May-2020</div>
                                </div>
                                <div className="blog-details">
                                    <ul className="post-meta">
                                        <li><i className="fa fa-user-o" />Post By: RT Shuvro</li>
                                        <li className="type"><img src="content/assets/img/blog/icon01.png" alt="icon" />Business</li>
                                    </ul>
                                    <h6><Link className="initiate-scripts" to={'/blog-single'}>How to invest and get money form E-Banking</Link></h6>
                                    <Link className="btn btn-round initiate-scripts" to={'/blog-single'}>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-blog">
                                <div className="thumb">
                                    <img src="content/assets/img/blog/03.png" alt="img" />
                                    <div className="date">05-May-2020</div>
                                </div>
                                <div className="blog-details">
                                    <ul className="post-meta">
                                        <li><i className="fa fa-user-o" />Post By: RT Shuvro</li>
                                        <li className="type"><img src="content/assets/img/blog/icon01.png" alt="icon" />Business</li>
                                    </ul>
                                    <h6><Link className="initiate-scripts" to={'/blog-single'}>How to invest and get money form E-Banking</Link></h6>
                                    <Link className="btn btn-round initiate-scripts" to={'/blog-single'}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogArea;
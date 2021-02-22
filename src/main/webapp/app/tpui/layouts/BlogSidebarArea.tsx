import React, {Component} from "react";
import {Link} from "react-router-dom";

type BlogSidebarAreaState={
    name:string
}

class BlogSidebarArea extends Component<{}, BlogSidebarAreaState>  {
    render() {
        return (
            <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder='Search Keyword' />
                            </div>
                        </div>
                        <button className="btn btn-blue rounded-0 w-100 btn_1 boxed-btn" type="submit">Search</button>
                    </form>
                </aside>

                <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Category</h4>
                    <ul className="list cat-list">
                        <li>
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <p>Ebanking</p>
                                <p>(37)</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <p>Credit Cards</p>
                                <p>(10)</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <p>Financial Fraud</p>
                                <p>(03)</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <p>Making Money</p>
                                <p>(11)</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <p>Personal Financial</p>
                                <p>21</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <p>Mobile Banking (21)</p>
                                <p>09</p>
                            </Link>
                        </li>
                    </ul>
                </aside>

                <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    <div className="media post_item">
                        <img src="content/assets/img/post/post_1.png" alt="post" />
                        <div className="media-body">
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <h3>Personal Savings...</h3>
                            </Link>
                            <p>January 12, 2020</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="content/assets/img/post/post_2.png" alt="post" />
                        <div className="media-body">
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <h3>Personal Mortgages</h3>
                            </Link>
                            <p>02 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="content/assets/img/post/post_3.png" alt="post" />
                        <div className="media-body">
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <h3>Business Checking</h3>
                            </Link>
                            <p>03 Hours ago</p>
                        </div>
                    </div>
                    <div className="media post_item">
                        <img src="content/assets/img/post/post_4.png" alt="post" />
                        <div className="media-body">
                            <Link to={'/blog'} className="d-flex initiate-scripts">
                                <h3>Business Loans </h3>
                            </Link>
                            <p>01 Hours ago</p>
                        </div>
                    </div>
                </aside>
                <aside className="single_sidebar_widget tag_cloud_widget">
                    <h4 className="widget_title">Tag Clouds</h4>
                    <ul className="list">
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>Savings</Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>Loans</Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>Services</Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>Money</Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>Mobile</Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>E-Banking</Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>Credit Cards</Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>Internet Banking</Link>
                        </li>
                    </ul>
                </aside>


                <aside className="single_sidebar_widget instagram_feeds">
                    <h4 className="widget_title">Instagram Feeds</h4>
                    <ul className="instagram_row flex-wrap">
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>
                                <img className="img-fluid" src="content/assets/img/post/post_5.png" alt="img" />
                            </Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>
                                <img className="img-fluid" src="content/assets/img/post/post_6.png" alt="img" />
                            </Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>
                                <img className="img-fluid" src="content/assets/img/post/post_7.png" alt="img" />
                            </Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>
                                <img className="img-fluid" src="content/assets/img/post/post_8.png" alt="img" />
                            </Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>
                                <img className="img-fluid" src="content/assets/img/post/post_9.png" alt="img" />
                            </Link>
                        </li>
                        <li>
                            <Link className="initiate-scripts" to={'/blog'}>
                                <img className="img-fluid" src="content/assets/img/post/post_10.png" alt="img" />
                            </Link>
                        </li>
                    </ul>
                </aside>


                <aside className="single_sidebar_widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>

                    <form action="#">
                        <div className="form-group">
                            <input type="email" className="form-control"  placeholder='Enter email' required />
                        </div>
                        <button
                            className="btn btn-blue button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                            type="submit">Subscribe
                        </button>
                    </form>
                </aside>
            </div>
        );
    }
}

export default BlogSidebarArea;
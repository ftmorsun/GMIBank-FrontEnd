import React, { Component } from "react";
import { Link } from "react-router-dom";

export interface INavBarProps {
    isAuthenticated?: boolean;
    firstName?: string;
    lastName?: string;
    isCustomer?: boolean;
}


const TNavbar = (props: INavBarProps) => {
    return (
        <div className="navbar-area bg-one">
            <nav className="navbar navbar-area navbar-expand-lg">
                <div className="container nav-container">
                    <div className="responsive-mobile-menu">
                        <button className="menu toggle-btn d-block d-lg-none" data-target="#banlank_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-left" />
                            <span className="icon-right" />
                        </button>
                    </div>
                    <div className="logo d-block d-lg-none">
                        <Link className="initiate-scripts" to={'/'}><img src="content/assets/img/logo.png" alt="img" /></Link>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                        <Link className="btn btn-round" to={'/signup'}>Open AN Account</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="banlank_main_menu">
                        <ul className="navbar-nav menu-open">
                            {/* <li className="menu-item-has-children current-menu-item">
                                    <Link className="initiate-scripts" to={'/'}>Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link className="initiate-scripts" to={'/home-one'}>Home 01</Link></li>
                                        <li><Link className="initiate-scripts" to={'/home-two'}>Home 02</Link></li>
                                    </ul>
                                </li> */}
                            <li><Link className="initiate-scripts" to={'/'}>Home</Link></li>
                            <li><Link className="initiate-scripts" to={'/loan'}>Loans</Link></li>
                            <li><Link className="initiate-scripts" to={'/about'}>About Us</Link></li>
                            <li><Link className="initiate-scripts" to={'/services'}>Services</Link></li>
                            <li className="menu-item-has-children"><Link className="initiate-scripts" to={'/blog'}>Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link className="initiate-scripts" to={'/loan'}>Loans</Link></li>
                                    <li><Link className="initiate-scripts" to={'/apply-loan'}>Apply Loans</Link></li>
                                    <li><Link className="initiate-scripts" to={'/about'}>About Us</Link></li>
                                    <li><Link className="initiate-scripts" to={'/services'}>Services</Link></li>
                                    <li><Link className="initiate-scripts" to={'/blog'}>Blog</Link></li>
                                    <li><Link className="initiate-scripts" to={'/blog-single'}>Blog Single</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><Link className="initiate-scripts" to={'blog'}>Blog</Link>
                                <ul className="sub-menu">
                                    <li><Link className="initiate-scripts" to={'/blog'}>Blog</Link></li>
                                    <li><Link className="initiate-scripts" to={'/blog-single'}>Blog Single</Link></li>
                                </ul>
                            </li>
                            <li><Link className="initiate-scripts" to={'/contact'}>Contact</Link></li>

                            <li className="menu-item-has-children">My Operations
                                    <ul className="sub-menu">
                                    <li><Link className="initiate-scripts" to={`/tp-customer-accounts/${4}`}>My Bank Accounst</Link></li>
                                </ul>
                            </li>

                            {/* 
                                <MenuItem icon="asterisk" to="/tp-state">
      <Translate contentKey="global.menu.entities.tpState" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tp-country">
      <Translate contentKey="global.menu.entities.tpCountry" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tp-customer">
      <Translate contentKey="global.menu.entities.tpCustomer" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tp-employee">
      <Translate contentKey="global.menu.entities.tpEmployee" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tp-transaction-log">
      <Translate contentKey="global.menu.entities.tpTransactionLog" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tp-account">
      <Translate contentKey="global.menu.entities.tpAccount" />
    </MenuItem>

    <MenuItem icon="asterisk" to="/tp-customer-accounts/">
     Customer Account
    </MenuItem> */}




                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TNavbar;

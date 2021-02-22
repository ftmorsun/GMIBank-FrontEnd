import React from 'react';
import { Translate, logInfo } from 'react-jhipster';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import appConfig from 'app/config/constants';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img src="content/images/logo-2.png" alt="Logo" />
  </div>
);

export const Brand = props => (
  <NavbarBrand tag={Link} to="/"  className="brand-logo">
    <BrandIcon />
    {/* <span style={{color:"#FFFFFF" }} ><i className="fa fa-map-marker" />908 Radic Road, NewYork, USA.</span> */}
   {/* <span className="brand-title">
      <Translate contentKey="global.title">Your Bank</Translate>
    </span> */}
    {/*  <span className="navbar-version">{appConfig.VERSION}</span> */}
  </NavbarBrand>
);

export const Home = props => (
  <NavItem >
    <NavLink style={{color:"#FFFFFF" }} tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>
        <Translate contentKey="global.menu.home">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);

export const SiteMenuItem = props => (
  <NavItem >
    <NavLink  style={{color:"#FFFFFF" }} tag={Link} to={props.path} className="d-flex align-items-center">
      {/* <FontAwesomeIcon icon="home" /> */}
      <span>
        {props.name}
      </span>
    </NavLink>
  </NavItem>
);

export const SiteMenuItemForName = props => (
  <NavItem >
    <NavLink id="username" style={{color:"#D76060", fontWeight:"bold" }} tag={Link} to="/account/settings"  className="d-flex align-items-center">
    <FontAwesomeIcon icon="user" />
      <span>
        {props.name}
      </span>
    </NavLink>
  </NavItem>
);
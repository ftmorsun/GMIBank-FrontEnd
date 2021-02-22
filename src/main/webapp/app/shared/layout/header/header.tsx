import './header.scss';

import React, { useState } from 'react';
import { Translate, Storage, logInfo } from 'react-jhipster';
import { Navbar, Nav, NavbarToggler, NavbarBrand, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';

import { Home, Brand, SiteMenuItem,SiteMenuItemForName } from './header-components';
import { AdminMenu, EntitiesMenu, AccountMenu, LocaleMenu } from '../menus';
import Preloader from 'app/tpui/layouts/Preloader';
import Topbar from 'app/tpui/layouts/Topbar';
import THeader from 'app/tpui/layouts/THeader';
import TNavbar from 'app/tpui/layouts/TNavbar';
import { CustomerMenu } from '../menus/customer';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isSwaggerEnabled: boolean;
  currentLocale: string;
  onLocaleChange: Function;
  firstName:string;
  lastName:string;
  userId?:number;
  account:object;
}

const Header = (props: IHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLocaleChange = event => {
    const langKey = event.target.value;
    Storage.session.set('locale', langKey);
    props.onLocaleChange(langKey);
  };

  const renderDevRibbon = () =>
    props.isInProduction === false ? (
      <div className="ribbon dev">
        <a href="">
          <Translate contentKey={`global.ribbon.${props.ribbonEnv}`} />
        </a>
      </div>
    ) : null;

  const toggleMenu = () => setMenuOpen(!menuOpen);


  /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */

  return (
    <div id="app-header">
      {/* {renderDevRibbon()} */}
       <LoadingBar className="loading-bar" />
      <Navbar style={{backgroundColor: '#083996'}}  light expand="md" fixed="top">
        <NavbarToggler style={{backgroundColor: '#8193FF'}} aria-label="Menu" onClick={toggleMenu} />
        <Brand />
        <Collapse isOpen={menuOpen} navbar>
          <Nav   id="header-tabs" className="ml-auto" navbar>
            <Home/>
            <SiteMenuItem name="Loans"  path="/loan"/>
            <SiteMenuItem name="About Us" path="/about"/>
            <SiteMenuItem name="Services" path="/services"/>
            <SiteMenuItem name="Blog" path="/blog"/>
            <SiteMenuItem name="About" path="/about"/>
            <SiteMenuItem name="Contact" path="/contact"/>
            {props.isAuthenticated && !hasAnyAuthority(props.account.authorities,[AUTHORITIES.CUSTOMER])? <  EntitiesMenu />:null}
            {props.isAuthenticated && hasAnyAuthority(props.account.authorities,[AUTHORITIES.CUSTOMER])? <CustomerMenu userId={props.userId} />:null}
            {props.isAuthenticated && props.isAdmin && <AdminMenu showSwagger={props.isSwaggerEnabled} />}
            <AccountMenu name={props.isAuthenticated?props.firstName +" "+ props.lastName:""} isAuthenticated={props.isAuthenticated} />
          </Nav>
        </Collapse>
      </Navbar>

                <Preloader />
               {/*} <Signin />
                <Signup /> */}
                 {/* <Topbar isAuthenticated={props.isAuthenticated} firstName={props.firstName} lastName={props.lastName}/> */}
                {/* <THeader /> */}
                {/* <TNavbar  />  */}
    </div>
  );
};

export default Header;

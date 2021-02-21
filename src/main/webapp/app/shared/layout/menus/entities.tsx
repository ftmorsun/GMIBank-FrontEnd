import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown 
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    {/* <MenuItem  icon="asterisk" to="/tp-state">
      <Translate contentKey="global.menu.entities.tpState" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tp-country">
      <Translate contentKey="global.menu.entities.tpCountry" />
    </MenuItem> */}
    <MenuItem icon="asterisk" to="/tp-customer">
      <Translate contentKey="global.menu.entities.tpCustomer" />
    </MenuItem>
    {/* <MenuItem icon="asterisk" to="/tp-employee">
      <Translate contentKey="global.menu.entities.tpEmployee" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/tp-transaction-log">
      <Translate contentKey="global.menu.entities.tpTransactionLog" />
    </MenuItem> */}
    <MenuItem icon="asterisk" to="/tp-account">
      <Translate contentKey="global.menu.entities.tpAccount" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);

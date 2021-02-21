import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';


 interface CustomerMenuProps {
  userId?:number;
}

export const CustomerMenu = (props: CustomerMenuProps) => {
  return (
  <NavDropdown
    icon="th-list"
    // name={translate('global.menu.entities.main')}
    name="My Operations"
    id="entity-menu"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    {/* <MenuItem icon="asterisk" to="/customer/tp-customer-accounts/{userId}">
     Customer Account
    </MenuItem> */}
   <DropdownItem tag={Link} to={"/customer/tp-customer-accounts/"+props.userId}>
        My Accounts
      </DropdownItem>

      <DropdownItem tag={Link} to={"/customer/tp-customer-accounts/transfer/"+props.userId}>
        Transfer Money
      </DropdownItem>

    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>

  
);}

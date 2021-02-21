import React, { useState } from "react";
import { Button} from 'reactstrap';
import { logInfo } from 'react-jhipster';
import { Link } from 'react-router-dom';


export interface ITopBarProps {
    isAuthenticated:boolean;
    firstName: string;
    lastName:string;
  }
  

const Topbar = (props:ITopBarProps) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);


     logInfo("TOPBAR:"+props);
  
    return (
        <div className="topbar-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <div className="topbar-left text-md-left text-center">
                            <p><i className="fa fa-map-marker" />908 Radic Road, NewYork, USA.</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-md-right text-center">
                        <div className="topbar-right">
                            {/* <p><i className="fa fa-envelope" /><span>9</span></p>
                            <p><i className="fa fa-bell" /><span>6</span></p> */}
                            {/* <div className="user"><img src="content/assets/img/author.png" alt="img" /></div>    */}
                        {props.isAuthenticated?<Link to="/logout">  <p><i className=" fa fa-map-marker fa fa-sign-out"/> {props.firstName+" "+props.lastName} Sign out</p></Link> : <Link  to="/login"><p><i className="fa fa-map-marker fa fa-sign-in"/> Sign in</p></Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';

class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0}}>
                    <div className="test">
                        <div className="row top-nav">
                                <div className="navbar-header col-sm-2">
                                    <a className=" sideControl navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
                                </div>

                                <div className="titlePage col-sm-8">
                                    <p>CCP OTC - KPEI</p>
                                </div>


                                    <ul className="nav navbar-top-links navbar-right navMenuUser col-sm-2 ">
                                        <li className="rounded">
                                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                                <span className="text-muted text-xs block">
                                                    <i className="fa fa-user-o" aria-hidden="true"></i>
                                                    <span> Username</span><b className="caret"></b>
                                                    {/* <img  src="img/profile_small.jpg" className="rounded" aria-hidden="true"></img> */}
                                                </span>
                                            </a>

                                            <ul className="dropdown-menu  m-t-xs style" x-placement="bottom-start">
                                                <li>
                                                    <a href="#" > User Info</a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-sign-out"></i> Log out
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                        </li>
                                    </ul>

                            </div>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default TopHeader
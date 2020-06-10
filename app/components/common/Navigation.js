import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side " role="navigation">
                <ul className="nav metismenu" id="side-menu" ref="menu">
                    <li className="nav-header">
                        {/* <div className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
                             </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div> */}

                        <div className="logo-element">
                            KPEI
                        </div>
                    </li>

                    <li className={this.activeRoute("/ats")}>
                        <Link to="/">
                            <i className="fa fa-tasks" aria-hidden="true"></i>
                            <span className="nav-label">ATS</span>
                            <span className="fa arrow"></span>
                        </Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li>
                                <Link to={{
                                    pathname: '/ats'
                                }}>
                                    New Trade
                                </Link>
                            </li>
                            <li >
                                <Link to={{
                                    pathname: '/ats/inquiryTrade'
                                }}>
                                    Inquiry trade
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={this.activeRoute("/transaction")}>
                        <Link to="/">
                            <i className="fa fa-money" aria-hidden="true"></i> 
                            <span className="nav-label">Transaction</span>
                            <span className="fa arrow"></span>
                        </Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li>
                                <Link to={{
                                    pathname: '/netPosition'
                                }}>
                                    Net Position
                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/tradeInquiry'
                                }}>
                                    Trade Inquiry
                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/novationReport'
                                }}>
                                    Novation Report
                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/clearing'
                                }}>
                                    Clearing Calculation
                                </Link>
                            </li>

                        </ul>

                    </li>

                    <li className={this.activeRoute("/account")}>
                        <Link to="/">
                            <i className="fa fa-user-circle" aria-hidden="true"></i> 
                            <span className="nav-label">Account</span>
                            <span className="fa arrow"></span>
                        </Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li>
                                <Link to={{
                                    pathname: '/accountDetail'
                                }}>
                                    Detail Information
                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/withdrawall'
                                }}>
                                    Widthrawall
                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/movementjrnl'
                                }}>
                                    Movement Journal
                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/manualsttl'
                                }}>
                                    Manual Settlement
                                </Link>
                            </li>

                        </ul>
                    </li>

                    <li className={this.activeRoute("/settlement")}>
                        <Link to="/">
                            <i className="fa fa-list-alt" aria-hidden="true"></i> 
                            <span className="nav-label">Settlement</span>
                            <span className="fa arrow"></span>
                        </Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li >
                                <Link to={{
                                    pathname: '/settlementsch'
                                }}>
                                    Schedule
                                </Link>
                            </li>
                            <li >
                                <Link to={{
                                    pathname: '/settlementhstr'
                                }}>
                                    History
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={this.activeRoute("/Settlement")}>
                        <Link to="/">
                            <i className="fa fa-flag" aria-hidden="true"></i> 
                            <span className="nav-label">Report</span>
                            <span className="fa arrow"></span>
                        </Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li >
                                <Link to={{
                                    pathname: '/reportView',
                                    state: { id: 'Clearing Report' }
                                }}>
                                    Clearing Report
                                </Link>
                            </li>
                            <li >
                                <Link to={{
                                    pathname: '/reportView',
                                    state: { id: 'Daily Transaction' }
                                }}>
                                    Daily Transaction
                                </Link>
                            </li>
                            <li >
                                <Link to={{
                                    pathname: '/reportView',
                                    state: { id: 'Settlement' }
                                }}>
                                    Settlement
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={this.activeRoute("/administration")}>
                        <Link to="/administration">
                            <i className="fa fa-book" aria-hidden="true"></i> 
                            <span className="nav-label">Administration</span>
                            <span className="fa arrow"></span>
                        </Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li>
                                <Link to="/administration/auditTrail" >
                                    Audit Trail
                                </Link>
                            </li>
                            <li>
                                <Link to="/administration/userManagement">
                                   User Management
                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/administration/product',
                                    state: { id: 'IRC' }
                                }}>
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link to="/administration/member">
                                    Members
                                </Link>
                            </li>
                            <li>
                                <Link to="/administration/client">
                                    Clients
                                </Link>
                            </li>
                            <li>
                                <Link to="/administration/System">
                                    System Parameter
                                </Link>
                            </li>
                            <li>
                                <Link to="/administration/calender">
                                    Calender
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className={this.activeRoute("/approval")}>
                        <Link to="/approval">
                            <i className="fa fa-edit"></i> 
                            <span className="nav-label">Approval</span>
                        </Link>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Navigation
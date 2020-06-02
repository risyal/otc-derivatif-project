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

                    <br />
                    {/* <li className={this.activeRoute("/main")}>
                        <Link to="/main"><i className="fa fa-home" aria-hidden="true"></i> <span className="nav-label">Home</span></Link>
                    </li>
                    <li className={this.activeRoute("/minor")}>
                        <Link to="/minor"><i className="fa fa-th-large"></i> <span className="nav-label">Minor view</span></Link>
                    </li> */}
                    <li className={this.activeRoute("/ats")}>
                        <Link to="/">
                            <i className="fa fa-balance-scale" aria-hidden="true"></i> 
                            <span className="nav-label">ATS</span>
                            <span className="fa arrow"></span>
                        </Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li >
                                <Link to={{
                                    pathname: '/ats'
                                }}><i aria-hidden="true"></i> <span className="nav-label">New Trade</span></Link>
                            </li>
                            <li >
                                <Link to={{
                                    pathname: '/ats/inquiryTrade'
                                }}><i aria-hidden="true"></i> <span className="nav-label">Inquiry trade</span></Link>
                            </li>
                        </ul>
                    </li>

                    <li className={this.activeRoute("/transaction")}>
                        <Link to="/"><i className="fa fa-money" aria-hidden="true"></i> <span className="nav-label">Transaction</span><span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li>
                                <Link to={{
                                    pathname: '/netPosition'
                                }}><i aria-hidden="true"></i><span className="nav-label">Net Position</span>

                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/tradeInquiry'
                                }}><i aria-hidden="true"></i><span className="nav-label">Trade Inquiry</span>

                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/novationReport'
                                }}><i aria-hidden="true"></i><span className="nav-label">Novation Report</span>

                                </Link>
                            </li>

                            <li>
                                <Link to={{
                                    pathname: '/clearing'
                                }}><i aria-hidden="true"></i><span className="nav-label">Clearing Calculation</span>

                                </Link>
                            </li>

                        </ul>

                    </li>

                    <li className={this.activeRoute("/account")}>
                        <Link to="/"><i className="fa fa-user-circle" aria-hidden="true"></i> <span className="nav-label">Account</span><span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li>
                                <Link to={{
                                    pathname: '/accountDetail'
                                }}><i aria-hidden="true"></i><span className="nav-label">Detail Information</span>

                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/withdrawall'
                                }}><i aria-hidden="true"></i><span className="nav-label">Widthrawall</span>

                                </Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/movementjrnl'
                                }}><i aria-hidden="true"></i><span className="nav-label">Movement Journal</span>

                                </Link>
                            </li>

                            <li>
                                <Link to={{
                                    pathname: '/manualsttl'
                                }}><i aria-hidden="true"></i><span className="nav-label">Manual Settlement</span>

                                </Link>
                            </li>

                        </ul>
                    </li>

                    <li className={this.activeRoute("/settlement")}>
                        <Link to="/"><i className="fa fa-list-alt" aria-hidden="true"></i> <span className="nav-label">Settlement</span><span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li >
                                <Link to={{
                                    pathname: '/settlementsch'
                                }}><i aria-hidden="true"></i> <span className="nav-label">Schedule</span></Link>
                            </li>
                            <li >
                                <Link to={{
                                    pathname: '/settlementhstr'
                                }}><i aria-hidden="true"></i> <span className="nav-label">History</span></Link>
                            </li>
                        </ul>
                    </li>

                    <li className={this.activeRoute("/Settlement")}>
                        <Link to="/"><i className="fa fa-flag" aria-hidden="true"></i> <span className="nav-label">Report</span><span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li >
                                <Link to={{
                                    pathname: '/reportView',
                                    state: { id: 'Clearing Report' }
                                }}><i aria-hidden="true"></i> <span className="nav-label">Clearing Report</span></Link>
                            </li>
                            <li >
                                <Link to={{
                                    pathname: '/reportView',
                                    state: { id: 'Daily Transaction' }
                                }}><i aria-hidden="true"></i> <span className="nav-label">Daily Transaction</span></Link>
                            </li>
                            <li >
                                <Link to={{
                                    pathname: '/reportView',
                                    state: { id: 'Settlement' }
                                }}><i aria-hidden="true"></i> <span className="nav-label">Settlement</span></Link>
                            </li>
                        </ul>
                    </li>

                    <li className={this.activeRoute("/administration")}>
                        <Link to="/administration"><i className="fa fa-book" aria-hidden="true"></i> <span className="nav-label">Administration</span><span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level collapse" aria-expanded="false" >
                            <li >
                                <Link to="/administration/auditTrail" ><i aria-hidden="true"></i> <span className="nav-label">Audit Trail</span></Link>
                            </li>

                            <li >
                                <Link to="/administration/userManagement"><i ></i> <span className="nav-label">User Management</span></Link>
                            </li>

                            <li>
                                <Link to={{
                                    pathname: '/administration/product',
                                    state: { id: 'IRC' }
                                }}><i ></i> <span className="nav-label">Product</span></Link>
                            </li>

                            <li>
                                <Link to="/administration/member"><i ></i> <span className="nav-label">Members</span></Link>
                            </li>

                            <li>
                                <Link to="/administration/client"><i ></i> <span className="nav-label">Clients</span></Link>
                            </li>

                            <li>
                                <Link to="/administration/System"><i ></i> <span className="nav-label">System Parameter</span></Link>
                            </li>

                            <li>
                                <Link to="/administration/calender"><i ></i> <span className="nav-label">Calender</span></Link>
                            </li>
                        </ul>
                    </li>

                    <li className={this.activeRoute("/approval")}>
                        <Link to="/approval"><i className="fa fa-edit" aria-hidden="true"></i> <span className="nav-label">Approval</span></Link>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Navigation
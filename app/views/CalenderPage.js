import React, { Component } from 'react';

import { Link } from 'react-router';
import HeaderPage from '../components/common/HeaderPage';

class CalenderPage extends Component {
    render() {
        return (
            <div>
                <HeaderPage
                    name="Administration - Calender"
                    namePage="Calender"
                    parentPage="Administration"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    <h5> </h5>
                                    {/* <div className="ibox-tools">
                                        <a className="collapse-link">
                                            <i className="fa fa-chevron-up"></i>
                                        </a>
                                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                            <i className="fa fa-wrench"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-user">
                                            <li><a href="#" className="dropdown-item">Config option 1</a>
                                            </li>
                                            <li><a href="#" className="dropdown-item">Config option 2</a>
                                            </li>
                                        </ul>
                                        <a className="close-link">
                                            <i className="fa fa-times"></i>
                                        </a>
                                    </div> */}
                                </div>
                                <div className="ibox-content">
                                    <button type="button" className="btn btn-white btn-sm" >
                                        <Link to="/fake"> Add New</Link>
                                    </button>
                                    {"   "}
                                    <button type="button" className="btn btn-white btn-sm" >

                                        <Link to="/fake"> Import</Link>

                                    </button>

                                    <br />
                                    <div className="table-responsive">
                                        <table className="table  table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Remark</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>2020-01-01</td>
                                                    <td>Tahun Baru</td>
                                                    <td><Link to={{
                                                        pathname: '/fake',
                                                        state: { id: '' }
                                                    }}>Delete</Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>2020-05-23</td>
                                                    <td>Idul Fitri</td>
                                                    <td><Link to={{
                                                        pathname: '/fake',
                                                        state: { id: '' }
                                                    }}>Delete</Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>2020-05-24</td>
                                                    <td>Idul Fitri</td>
                                                    <td><Link to={{
                                                        pathname: '/fake',
                                                        state: { id: '' }
                                                    }}>Delete</Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td> </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">7</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CalenderPage
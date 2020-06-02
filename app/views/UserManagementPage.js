import React, { Component } from 'react';

import HeaderPage from '../components/common/HeaderPage';

class UserManagementPage extends Component {

    render() {
        return (
            <div>
                <HeaderPage
                    name="Administration - User Management"
                    namePage="User Management"
                    parentPage="Administration"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    {/* <h5> </h5> */}
                                    <div className="row">
                                        <div className="col-sm-5 m-b-xs">
                                            <button type="button" className="btn btn-white btn-sm" >
                                                <a to="/fake"> Add New</a>
                                            </button>
                                            {"   "}
                                            <button type="button" className="btn btn-white btn-sm" >

                                                <a to="/fake"> Import</a>

                                            </button>
                                        </div>
                                        <div className="col-sm-3 m-b-xs">
                                            <input placeholder="Search : User" type="text" className="form-control form-control-sm" />
                                        </div>
                                        <div className="col-sm-3 ">
                                            <select className="form-control-sm form-control input-s-sm inline">
                                                <option value="0">Option 1</option>
                                                <option value="1">Option 2</option>
                                                <option value="2">Option 3</option>
                                                <option value="3">Option 4</option>
                                            </select>

                                        </div>
                                        <div className="col-sm-1 ">
                                            <button type="button" className="btn btn-sm btn-primary">Go!
                                                    </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="ibox-content">
                                    <div className="table-responsive">
                                        <table className="table  table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Level</th>
                                                    <th scope="col">Role</th>
                                                    <th scope="col">Member</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Last Login</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">MDCL01</th>
                                                    <td>CLIENT</td>
                                                    <td>Maker/Checker/Approver</td>
                                                    <td>BMAN</td>
                                                    <td>Active</td>
                                                    <td>20200301 103022</td>
                                                    <td><select className="form-control-sm form-control input-s-sm inline">
                                                        <option value="0">Action</option>
                                                        <option value="1">Edit</option>
                                                        <option value="2">Delete</option>
                                                        <option value="3">Reset Password</option>
                                                    </select></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">7</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <div className="text-right">
                                            <a to="/fake" > Download CSV</a>
                                        </div>
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

export default UserManagementPage
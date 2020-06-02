import React, { Component } from 'react';

import { Link } from 'react-router';
import HeaderPage from '../components/common/HeaderPage';

class ApprovalPage extends Component {
    render() {
        return (
            <div>
                <HeaderPage
                    name="Approval"
                    namePage="Approval"
                    parentPage=""
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    <h5> </h5>

                                </div>
                                <div className="ibox-content">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <thead border="1">
                                                <tr>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">No</th>
                                                    <th scope="col" className="text-center" colSpan="3">Maker</th>
                                                    <th scope="col" className="text-center" colSpan="3">Checher </th>
                                                    <th scope="col" className="text-center" colSpan="3">Approver</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Task</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Status</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Action</th>
                                                </tr>
                                                <tr>
                                                    <th scope="col" className="text-center" >User</th>
                                                    <th scope="col" className="text-center" >Date</th>
                                                    <th scope="col" className="text-center" >Time</th>
                                                    <th scope="col" className="text-center" >User</th>
                                                    <th scope="col" className="text-center" >Date</th>
                                                    <th scope="col" className="text-center" >Time</th>
                                                    <th scope="col" className="text-center" >User</th>
                                                    <th scope="col" className="text-center" >Date</th>
                                                    <th scope="col" className="text-center" >Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>MAKER1</td>
                                                    <td>2020-05-05</td>
                                                    <td>10:30</td>
                                                    <td>CHECKER</td>
                                                    <td>2020-05-05</td>
                                                    <td>10:30</td>
                                                    <td>APPROVER1</td>
                                                    <td>2020-05-05</td>
                                                    <td>10:30</td>
                                                    <td>NewTrade</td>
                                                    <td>Approved</td>
                                                    <td><Link to={{
                                                        pathname: '/approvaldetail',
                                                        state: { id: 'Data Pertama' }
                                                    }}>Detail</Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>MAKER1</td>
                                                    <td>2020-05-05</td>
                                                    <td>10:30</td>
                                                    <td>CHECKER</td>
                                                    <td>2020-05-05</td>
                                                    <td>10:30</td>
                                                    <td>APPROVER1</td>
                                                    <td>2020-05-05</td>
                                                    <td>10:30</td>
                                                    <td>NewTrade</td>
                                                    <td>Rejected</td>
                                                    <td><Link to={{
                                                        pathname: '/approvaldetail',
                                                        state: { id: 'Data Kedua' }
                                                    }}>Detail</Link></td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>MAKER1</td>
                                                    <td>2020-05-05</td>
                                                    <td>10:30</td>
                                                    <td>CHECKER</td>
                                                    <td>2020-05-05</td>
                                                    <td>10:30</td>
                                                    <td>APPROVER1</td>
                                                    <td>2020-05-05</td>
                                                    <td>10:30</td>
                                                    <td>NewTrade</td>
                                                    <td>Waiting Checker</td>
                                                    <td><Link to={{
                                                        pathname: '/approvaldetail',
                                                        state: { id: 'Data Ketiga' }
                                                    }}>Detail</Link></td>

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
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
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

export default ApprovalPage
import React, { Component } from 'react';
import HeaderPage from '../components/common/HeaderPage';

class AccountPage extends Component {

    render() {
        return (
            <div>
                <HeaderPage
                    name="Account - Detail Information"
                    namePage="Detail Information"
                    parentPage="Account"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    {/* <h5> </h5> */}
                                    <div className="row">
                                        <div className="col-sm-5 m-b-xs">

                                        </div>
                                        <div className="col-sm-3 m-b-xs">
                                        </div>
                                        <div className="col-sm-3 ">
                                            {/* <select className="form-control-sm form-control input-s-sm inline">
                                                <option value="0">Date</option>
                                                <option value="1">Member</option>
                                                <option value="2">Status</option>
                                                <option value="3">Number</option>
                                            </select> */}
                                            <input placeholder="Search" type="text" className="form-control form-control-sm" />

                                        </div>
                                        <div className="col-sm-1 ">
                                            <button type="button" className="btn btn-sm btn-primary">Search
                                                    </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="ibox-content">
                                    <div className="table-responsive">
                                        <table className="table  table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Member ID</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Client ID</th>
                                                    <th scope="col" className="text-center" colSpan="2">Settlement</th>
                                                    <th scope="col" className="text-center" colSpan="2">Cash Collateral</th>
                                                    <th scope="col" className="text-center" colSpan="2">Non Cash Collateral</th>
                                                    <th scope="col" className="text-center" colSpan="2">Default</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Block Collateral</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">RTGS Acc No</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Action</th>
                                                </tr>
                                                <tr>
                                                    <th scope="col" className="text-center">Acc No</th>
                                                    <th scope="col" className="text-center">Balance</th>
                                                    <th scope="col" className="text-center">Acc No</th>
                                                    <th scope="col" className="text-center">Balance</th>
                                                    <th scope="col" className="text-center">Acc No</th>
                                                    <th scope="col" className="text-center">Balance</th>
                                                    <th scope="col" className="text-center">Acc No</th>
                                                    <th scope="col" className="text-center">Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {/* <td>2020-03-03</td>
                                                    <td>15:01::25</td>
                                                    <td>OIS</td>
                                                    <td>COMM123</td>
                                                    <td>CL456</td>
                                                    <td>BMAN123</td>
                                                    <td>CL123</td>
                                                    <td>TRD012345</td>
                                                    <td>NOV012345</td>
                                                    <td>10.000.000.000</td>
                                                    <td>Delivered</td>
                                                    <td>Novated</td> */}
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
                                                    <td></td>
                                                </tr>
                                                <tr>
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
                                                    <td></td>
                                                </tr>
                                                <tr>
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
                                                    <td></td>
                                                </tr>
                                                <tr>
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
                                                    <td></td>

                                                </tr>
                                                <tr>
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
                                                    <td></td>
                                                </tr>
                                                <tr>
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
                                                    <td></td>
                                                </tr>
                                                <tr>
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

export default AccountPage
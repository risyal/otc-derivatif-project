import React, { Component } from 'react';
import HeaderPage from '../components/common/HeaderPage';

class SettlementSchedule extends Component {

    render() {
        return (
            <div>
                <HeaderPage
                    name="Settlement - Schedule"
                    namePage="Schedule"
                    parentPage=""
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    {/* <h5> </h5> */}
                                    <div className="row">
                                        <div className="col-sm-8 m-b-xs">
                                            {/*  <button type="button" className="btn btn-white btn-sm" >
                                                <a to="/fake"> Add New</a>
                                            </button>
                                            {"   "}
                                            <button type="button" className="btn btn-white btn-sm" >

                                                <a to="/fake"> Import</a>

                                            </button> */}
                                        </div>
                                        <div className="col-sm-3 m-b-xs">
                                            <input placeholder="Search" type="text" className="form-control form-control-sm" />
                                        </div>
                                        <div className="col-sm-1 ">
                                            <button type="button" className="btn btn-sm btn-primary">Go!
                                                    </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="ibox-content">
                                    <div className="table-responsive">
                                        <table className="table  table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Novation Trade Number</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Product</th>
                                                    <th scope="col" className="text-center" colSpan="2">Member</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Settlement Date</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Value</th>
                                                </tr>
                                                <tr>
                                                    <th scope="col" className="text-center">MemberID</th>
                                                    <th scope="col" className="text-center">Client ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">NOV012345</th>
                                                    <td>OIS</td>
                                                    <td>Client123</td>
                                                    <td>BMAN123</td>
                                                    <td>2020-03-03</td>
                                                    <td>10.000.000.000</td>
                                                </tr>
                                                <tr>
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
                                                </tr>
                                                <tr>
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
                                                </tr>
                                                <tr>
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

export default SettlementSchedule
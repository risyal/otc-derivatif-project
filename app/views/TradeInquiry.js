import React, { Component } from 'react';
import HeaderPage from '../components/common/HeaderPage';

class TradeInquery extends Component {

    render() {
        return (
            <div>
                <HeaderPage
                    name="Transaction - Trade Inquery"
                    namePage="Trade Inquery"
                    parentPage="Transaction"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    {/* <h5> </h5> */}
                                    <div className="row">
                                        <div className="col-sm-5 m-b-xs">
                                            {/* <button type="button" className="btn btn-white btn-sm" >
                                                <a to="/fake"> Add New</a>
                                            </button>
                                            {"   "}
                                            <button type="button" className="btn btn-white btn-sm" >

                                                <a to="/fake"> Import</a>

                                            </button> */}
                                        </div>
                                        <div className="col-sm-3 m-b-xs">
                                        </div>
                                        <div className="col-sm-3 ">
                                            <select className="form-control-sm form-control input-s-sm inline">
                                                <option value="0">Date</option>
                                                <option value="1">Member</option>
                                                <option value="2">Status</option>
                                                <option value="3">Number</option>
                                            </select>

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
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Tanggal</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Jam</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Product</th>
                                                    <th scope="col" className="text-center" colSpan="2">Member I</th>
                                                    <th scope="col" className="text-center" colSpan="2">Member II/ Counterpart</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Origin Trade Number</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Novation Trade Number</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Value</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Maturity Date</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Status</th>
                                                </tr>
                                                <tr>
                                                    <th scope="col" className="text-center">MemberID</th>
                                                    <th scope="col" className="text-center">Client ID</th>
                                                    <th scope="col" className="text-center">MemberID</th>
                                                    <th scope="col" className="text-center">Client ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>2020-03-03</td>
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
                                                    <td>Novated</td>
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

export default TradeInquery
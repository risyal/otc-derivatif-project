import React from 'react';
import HeaderPage from '../components/common/HeaderPage';

const NovationReport = (props) => {
    return (
        <div>
            <HeaderPage
                name="Transaction - Novation Report"
                namePage="Novation Report"
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
                              
                               
                                {/*  <div className="col-sm-5 m-b-xs">
                                    <button type="button" className="btn btn-white btn-sm" >
                                        <a to="/fake"> Reject</a>
                                    </button>
                                </div>
                                <div className="col-sm-5">
                                    <div className="text-right">
                                        <button type="button" className="btn btn-white btn-sm" >
                                            <a to="/fake"> Check</a>
                                        </button>
                                        {"   "}
                                        <button type="button" className="btn btn-white btn-sm" >

                                            <a to="/fake"> (Direct) Approve</a>

                                        </button>
                                    </div>
                                </div> */}
                                <div className = "table-responsive">
                                    <table className="table  table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-center" >Product</th>
                                                <th scope="col" className="text-center">Original Trade ID</th>
                                                <th scope="col" className="text-center">Novated Trade ID</th>
                                                <th scope="col" className="text-center">Clearing Member ID</th>
                                                <th scope="col" className="text-center">Clearing Member POsition</th>
                                                <th scope="col" className="text-center">KPEI ID</th>
                                                <th scope="col" className="text-center">KPEI POsition</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                    <td>IRS</td>
                                                    <td>AB1234567</td>
                                                    <td>AD2345666</td>
                                                    <td>MS234433</td>
                                                    <td>Fixed Rate Payer</td>
                                                    <td>KP344569</td>
                                                    <td>Fixed Rate Receiver</td>
                                               
                                            </tr>
                                            <tr>
                                              
                                                    <td>IRS</td>
                                                    <td>AB1234567</td>
                                                    <td>AD2345666</td>
                                                    <td>JP098871</td>
                                                    <td>Fixed Rate Receiver</td>
                                                    <td>KP344569</td>
                                                    <td>Fixed Rate Payer</td>
                                             
                                            </tr>
                                            <tr>
                                             
                                                    <td>IRS</td>
                                                    <td>AB1234566</td>
                                                    <td>DE4325667</td>
                                                    <td>CS876654</td>
                                                    <td>Fixed Rate Receiver</td>
                                                    <td>KP344569</td>
                                                    <td>Fixed Rate Payer</td>
                               
                                            </tr>
                                            <tr>
                                           
                                                    <td>IRS</td>
                                                    <td>AB1234566</td>
                                                    <td>DE4325667</td>
                                                    <td>C1456533</td>
                                                    <td>Fixed Rate Payer</td>
                                                    <td>KP344569</td>
                                                    <td>Fixed Rate Receiver</td>
                                          
                                            </tr>
                                            <tr>
                                            
                                                    <td>DNDF</td>
                                                    <td>AB3456789</td>
                                                    <td>BC6543210</td>
                                                    <td>KW98765</td>
                                                    <td>Buyer</td>
                                                    <td>KP344569</td>
                                                    <td>Seller</td>
                                               
                                            </tr>
                                            <tr>
                                                 
                                                    <td>DNDF</td>
                                                    <td>AB3456789</td>
                                                    <td>BC6543210</td>
                                                    <td>YR135791</td>
                                                    <td>Seller</td>
                                                    <td>KP344569</td>
                                                    <td>Buyer</td>
                                              
                                            </tr>

                                        </tbody>


                                    </table>

                                </div>

                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NovationReport
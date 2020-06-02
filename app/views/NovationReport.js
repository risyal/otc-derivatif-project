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
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
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
import React from 'react';

import HeaderPage from '../components/common/HeaderPage';

const ReportView = (props) => {
    var ket = props.location.state.id;
    return (
        <div>
            <HeaderPage
                name="Report"
                namePage={ket}
                parentPage=""
            ></HeaderPage>
            <div className="wrapper wrapper-content animated fadeInRight content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox ">
                            <div className="ibox-title">
                                <h5> Detail Task</h5>

                            </div>
                            <div className="ibox-content">
                                {ket}
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
export default ReportView;

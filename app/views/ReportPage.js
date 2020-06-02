import React, { Component } from 'react';

import { Link } from 'react-router';
import HeaderPage from '../components/common/HeaderPage';

class ReportPage extends Component {

    render() {
        return (
            <div>
                <HeaderPage
                    name="Administration - Report"
                    namePage="Report"
                    parentPage="Administration"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    <div className="ibox-title">
                                        <div className="col-sm-9 m-b-xs">
                                            <div data-toggle="buttons" class="btn-group btn-group-toggle">
                                                <Link to={{
                                                    pathname: '/approvaldetail',
                                                    state: { id: 'Data Ketiga' }
                                                }}> <label className="btn btn-sm btn-white">
                                                        <input type="radio" id="option1" name="options" /> IRS</label>
                                                </Link>
                                                <label className="btn btn-sm btn-white active">
                                                    <input type="radio" id="option2" name="options" /> OIS </label>
                                                <label className="btn btn-sm btn-white">
                                                    <input type="radio" id="option3" name="options" /> DNDF </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="ibox-content">
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="col-sm-5 m-b-xs">
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

}

export default ReportPage
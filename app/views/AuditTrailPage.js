import React, { Component } from 'react';

import HeaderPage from '../components/common/HeaderPage';
class AuditTrailPage extends Component {

    render() {
        return (
            <div>
                <HeaderPage
                    name="Administration - Audit Trail"
                    namePage="Audit Trail"
                    parentPage="Administration"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    {/* <h5> </h5> */}
                                    <div className="row">
                                        <div className="col-sm-8 m-b-xs">
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
                                                    <th scope="col">Tanggal</th>
                                                    <th scope="col">Jam</th>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Modul / Service</th>
                                                    <th scope="col">Action</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>2020-03-03</td>
                                                    <td>15:01::25</td>
                                                    <td>Admin KPEI</td>
                                                    <td>ACCOUNT</td>
                                                    <td>Manual Settlement</td>
                                                    <td>Succes</td>
                                                    <td>Move from xxx to yyy</td>
                                                </tr>
                                                <tr>
                                                    <td>2020-03-03</td>
                                                    <td>07:03:45</td>
                                                    <td>Scheduler</td>
                                                    <td>SETTLEMENT</td>
                                                    <td>Do Settlement</td>
                                                    <td>Warning</td>
                                                    <td>Member aa Margin Call</td>
                                                </tr>
                                                <tr>
                                                    <td>2020-03-03</td>
                                                    <td>15:01::25</td>
                                                    <td>Member bb</td>
                                                    <td>ACCOUNT</td>
                                                    <td>Transfer Balance</td>
                                                    <td>Succes</td>
                                                    <td>Moving IDR 1234 froim Cosh Coll to Settlement</td>
                                                </tr>
                                                <tr>
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
                                                </tr>
                                                <tr>
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

export default AuditTrailPage
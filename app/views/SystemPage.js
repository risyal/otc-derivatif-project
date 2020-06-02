import React, { Component } from 'react';

import HeaderPage from '../components/common/HeaderPage';
import { Link } from 'react-router';

class SystemPage extends Component {

    render() {
        return (
            <div>
                <HeaderPage
                    name="Administration - System Parameter"
                    namePage="System Parameter"
                    parentPage="Administration"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    {/* <h5> Detail Task</h5> */}
                                    {/* <div className="text-right tooltip-demo">
                                        <button type="submit" className="btn btn-white btn-sm" >
                                            <Link to="/fake"> Download CSV</Link>
                                        </button>
                                    </div> */}
                                </div>
                                <div className="ibox-content">
                                    <div className="table-responsive">
                                        <table className="table  table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Parameter</th>
                                                    <th scope="col">Value</th>
                                                    <th scope="col">Modules/Servces</th>
                                                    <th scope="col">Note</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>SCH_SEND_TO_RAZOR</td>
                                                    <td>10</td>
                                                    <td>SCHEDULER</td>
                                                    <td>Pengiiriman Net Pos ke RAZOR tiap 10 mnt</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>SCH_CALCULATE_IRS</td>
                                                    <td>11:30:00</td>
                                                    <td>SCHEDULER</td>
                                                    <td>Waktu perhitungan IRS</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
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

                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td> </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
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

export default SystemPage
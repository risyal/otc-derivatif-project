import React, { Component } from 'react'
import HeaderPage from '../components/common/HeaderPage';
import DatePicker from 'react-bootstrap-date-picker';

class MovementJournal extends Component {
    render() {
        return (
            <div>
                <HeaderPage
                    name="Account - Movement Journal"
                    namePage="Movement Journal"
                    parentPage="Account"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    {/* <h5> </h5> */}
                                    <div className="row">
                                        <div className="col-sm-3 m-b-xs">
                                            <DatePicker
                                                defaultValue="2020-05-28" />
                                        </div>
                                        <div className="col-sm-5 m-b-xs">

                                        </div>

                                        <div className="col-sm-3 ">
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
                                        <table className="table  table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Member ID</th>
                                                    <th scope="col">Client ID</th>
                                                    <th scope="col">Instruction Type</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Time</th>
                                                    <th scope="col">Source Acc</th>
                                                    <th scope="col">Dest</th>
                                                    <th scope="col">Acc</th>
                                                    <th scope="col">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
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
                                                    <th scope="row">2</th>
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
                                                    <th scope="row">3</th>
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
                                                    <th scope="row">4</th>
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
                                                    <td> </td>
                                                    <td> </td>
                                                    <td> </td>
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
export default MovementJournal;

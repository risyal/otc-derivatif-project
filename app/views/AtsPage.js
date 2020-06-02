import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import HeaderPage from '../components/common/HeaderPage';

class AtsPage extends Component {
    render() {
        return (
            <div>
                <HeaderPage
                    name="ATS - New Trade"
                    namePage="New Trade"
                    parentPage="ATS"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    <form >
                                        <div className="form-group col-md-5 ">
                                            <div className="form-group row">
                                                <div className="form-group col-md-3">
                                                    <label for="inputUser1">User</label>
                                                </div>

                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control field-user" id="inputUser1" />
                                                </div>
                                            </div >

                                            <div className="form-group row">
                                                <div className="form-group col-md-3">
                                                    <label for="inputUser2">Product</label>

                                                </div>
                                                {/* <div className="col-sm-1">
                                                <label for="inputProduct"> : </label>
                                            </div> */}
                                                <div className="col-sm-5">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>...</option>
                                                        <option>IRS</option>
                                                        <option>OIS</option>
                                                        <option>DNDF</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form-group col-md-6">
                                            <div className="form-group row">
                                                <div className="form-group col-md-3">
                                                    <label for="inputConterPart">Counterpart</label>
                                                </div>

                                                {/* <div className="col-sm-1">
                                                    <label for="inputConterPart"> : </label>
                                                </div> */}

                                                <div className="col-sm-5">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>CounterPart</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="form-group row">
                                                <div className="form-group col-md-3">
                                                    <label for="inputClient">Client / Member </label>

                                                </div>

                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control field-user" id="inputClient" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />

                                </div>
                                <div className="ibox-content">
                                    <div className="table-responsive">

                                        <table className="table  table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Parameters</th>
                                                    <th scope="col">Definition</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>

                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <button type="button" className="btn btn-primary btn-submit" >
                                            <span >

                                                Process
                            </span>


                                        </button>

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

export default AtsPage
import React, { Component } from 'react'
import HeaderPage from '../components/common/HeaderPage';

class Widthrawall extends Component {
    render() {
        return (
            <div>
                <HeaderPage
                    name="Account - Widthrawall"
                    namePage="Widthrawall"
                    parentPage="Account"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    <h5> Detail Task</h5>

                                </div>
                                <div className="ibox-content">
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label">User:</label>
                                        <div className="col-lg-4">
                                            <input type="input" placeholder="" className="form-control" />
                                        </div>
                                        <label className="col-lg-2 col-form-label">Client / Member :</label>
                                        <div className="col-lg-4">
                                            <input type="input" placeholder="" className="form-control" />
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-2">
                                        </div>
                                        <div className="col-lg-10">
                                            <label> <input type="radio" checked="" value="option1" id="optionsRadios1" name="optionsRadios" /> Tranfer Balance </label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label">Destination Account :</label>

                                        <div className="col-lg-10">
                                            <select id="inputState" className="form-control">
                                                <option selected>Default </option>
                                                <option>Coll </option>
                                                <option>Sett</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-2">
                                        </div>
                                        <div className="col-lg-10">
                                            <label> <input type="radio" checked="" value="option1" id="optionsRadios1" name="optionsRadios" /> Balance Widthrawall </label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label">Bank Code :</label>
                                        <div className="col-lg-4">
                                            <select id="inputState" className="form-control">
                                                <option selected>Bank Cod </option>
                                            </select>
                                        </div>
                                        <label className="col-lg-2 col-form-label">RTGS Acc No :</label>
                                        <div className="col-lg-4">
                                            <input type="input" placeholder="" className="form-control" />
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label">Amount :</label>

                                        <div className="col-lg-10">
                                            <input type="input" placeholder="" className="form-control" />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-lg-2">

                                        </div>
                                        <div className="col-lg-10">
                                            <button class="btn btn-sm btn-primary float-right m-t-n-xs" type="submit"><strong>Process</strong></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default Widthrawall;
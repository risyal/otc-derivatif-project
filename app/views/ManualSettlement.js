import React, { Component } from 'react';
import HeaderPage from '../components/common/HeaderPage';

class ManualSettlement extends Component {
    render() {
        return (
            <div>
                <HeaderPage
                    name="Account - Manual Settlement"
                    namePage="Manual Settlement"
                    parentPage="Account"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">

                                </div>
                                <div className="ibox-content">
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label">Client :</label>

                                        <div className="col-lg-10">
                                            <input type="input" placeholder="" className="form-control" />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label">Member :</label>

                                        <div className="col-lg-10">
                                            <input type="input" placeholder="" className="form-control" />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-2 col-form-label">Source Account :</label>

                                        <div className="col-lg-10">
                                            <select id="inputState" className="form-control">
                                                <option selected>Default </option>
                                                <option>Coll </option>
                                                <option>Sett</option>
                                            </select>
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

export default ManualSettlement;

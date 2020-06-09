import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import HeaderPage from '../components/common/HeaderPage';
import IRSPage from '../views/AtsIRS';
import AtsOis from './AtsOis';
import AtsDndf from './AtsDndf';

class AtsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isIrs: false,
            isOis: false,
            isDndf: false
        };
    }
    render() {
        const handleSearch = (e) => {
            console.log(e);
            if (e == 'irs') {
                this.setState({
                    isIrs: true,
                    isOis: false,
                    isDndf: false
                });
            } else if (e == 'ois') {
                this.setState({
                    isIrs: false,
                    isOis: true,
                    isDndf: false
                });
            } else if (e == 'dndf') {
                this.setState({
                    isIrs: false,
                    isOis: false,
                    isDndf: true
                });
            } else {
                this.setState({
                    isIrs: false,
                    isOis: false,
                    isDndf: false
                });
            }

        };
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
                                    {/*  <form >
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
                                    </form> */}

                                </div>
                                <div className="ibox-content">
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">User </label>

                                        <div className="col-lg-5">
                                            <input type="input" placeholder="" className="form-control" />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Product </label>

                                        <div className="col-lg-5">
                                            <select id="inputState" className="form-control"
                                                onChange={(e) => handleSearch(e.target.value)}>
                                                <option selected>Pilih Product </option>
                                                <option value="irs">IRS </option>
                                                <option value="ois">OIS </option>
                                                <option value="dndf">DNDF </option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Counterpart </label>

                                        <div className="col-lg-5">
                                            <input type="input" placeholder="" className="form-control" />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label">Client / Member </label>

                                        <div className="col-lg-5">
                                            <input type="input" placeholder="" className="form-control" />

                                        </div>
                                    </div>
                                    {this.state.isIrs ?
                                        <IRSPage></IRSPage>
                                        : this.state.isOis ?
                                            <AtsOis></AtsOis>
                                            : this.state.isDndf ?
                                                <AtsDndf></AtsDndf>
                                                : <div><span>Pilih Product</span></div>
                                    }

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


        )
    }
}

export default AtsPage
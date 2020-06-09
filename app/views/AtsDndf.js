import React from 'react'
import DatePicker from 'react-bootstrap-date-picker';

export default function AtsDndf() {
    return (
        <div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Trade Deal Date </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="Business Days">Business Days </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Currency </label>

                <div className="col-lg-2">
                    <select id="inputState" className="form-control">
                        <option value="idr">IDR </option>
                        <option value="usd">USD </option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <input type="input" placeholder=" " className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Currency Pair </label>

                <div className="col-lg-2">
                    <select id="inputState" className="form-control">
                        <option value="USD">USD </option>
                        <option value="IDR">IDR </option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <input type="input" placeholder=" " className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Forward Rate </label>

                <div className="col-lg-2">
                    <select id="inputState" className="form-control">
                        <option value="IDR">IDR </option>
                        <option value="USD">USD </option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <input type="input" placeholder=" " className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Notional Foreign Currency </label>

                <div className="col-lg-2">
                    <select id="inputState" className="form-control">
                        <option value="USD">USD </option>
                        <option value="IDR">IDR </option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <input type="input" placeholder=" " className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Fixing Date </label>

                <div className="col-lg-5">
                    <DatePicker
                        defaultValue="2020-05-28" />

                </div>
            </div>

            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Market Side </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="Buy">Buy </option>
                        <option value="Sell">Sell </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Forward Point/Spread </label>

                <div className="col-lg-2">
                    <select id="inputState" className="form-control">
                        <option value="IDR">IDR </option>
                        <option value="USD">USD </option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <input type="input" placeholder=" " className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Reference Rate </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="" className="form-control" value="JISDOR" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Settlement Type </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="Non Deliverable">Non Deliverable </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Settlement Date </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="BI Business Day (Jakarta)" className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Settlement Currency </label>

                <div className="col-lg-2">
                    <select id="inputState" className="form-control">
                        <option value="IDR">IDR </option>
                        <option value="USD">USD </option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <input type="input" placeholder=" " className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Tenor </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="1M">3D  </option>
                        <option value="1M">1M  </option>
                        <option value="3M">3M </option>
                        <option value="6M">6M </option>
                        <option value="1Y">1Y </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Price Source Disruption </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="Refer to PBI (Usually using D-1 Price)" className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Rounding </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="Rp.1.- " className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Notional Amount </label>

                <div className="col-lg-2">
                    <select id="inputState" className="form-control">
                        <option value="IDR">IDR </option>
                        <option value="USD">USD </option>
                    </select>
                </div>
                <div className="col-lg-3">
                    <input type="input" placeholder=" " className="form-control" />

                </div>
            </div>
        </div >
    )
}

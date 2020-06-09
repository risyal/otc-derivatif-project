import React from 'react'
import DatePicker from 'react-bootstrap-date-picker';

export default function AtsOis() {
    return (
        <div>
            {/* <div className="form-group row">
                <label className="col-lg-3 col-form-label">Attribute </label>

                <div className="col-lg-5">
                    <label className="col-lg-3 col-form-label">Interest Rate Swap (IRS) </label>

                </div>
            </div> */}
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Market Side </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="receive">Receive </option>
                        <option value="pay">Pay </option>
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
                <label className="col-lg-3 col-form-label">Leg Type/sub-product </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="idr">Fixed/Float </option>
                        <option value="usd">Float/Float </option>
                    </select>
                </div>
            </div><div className="form-group row">
                <label className="col-lg-3 col-form-label">Trade Date </label>

                <div className="col-lg-5">
                    <DatePicker
                        defaultValue="2020-05-28" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Effective/Commencement Date </label>

                <div className="col-lg-5">
                    <DatePicker
                        defaultValue="2020-05-30" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Maturity/termination Date </label>

                <div className="col-lg-5">
                    <DatePicker
                        defaultValue="2020-05-28" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Settlement Type </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="IDR Net Cash" className="form-control" value="" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Contract Term </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="fixed">1 minggu  </option>
                        <option value="1 bulan">1 bulan </option>
                        <option value="3 bulan">3 bulan </option>
                        <option value="6 bulan">6 bulan </option>
                        <option value="9 bulan">9 bulan </option>
                        <option value="12 bulan">12 bulan </option>
                        <option value="others">others </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Notional Amount </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="IDR Min Rp 1.000.000.000" className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Payment Frequency (Fix and Float) </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="" className="form-control" value="On Maturity Date" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Valuation/Fixing Date </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="Daily">Daily  </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Floating Rate Index </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="INDONIA">INDONIA  </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Reference </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="" className="form-control" value="Format KPEI - BI" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Day Count Fraction (Fix and Float) </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="Act/360">Act/360  </option>
                        <option value="ACT/ACT">ACT/ACT </option>
                        <option value="ACT/365">ACT/365 </option>
                        <option value="30/360">30/360 </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Floating Rate Reset Frequency </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="1M">1D  </option>
                        <option value="3M">3D </option>
                        <option value="6M">6D </option>
                        <option value="1Y">1M </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Floating Rate Index Tenor </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="Overnight">Overnight  </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Business Day Convention </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="1M">Mod Following (default)  </option>
                        <option value="3M">Following </option>
                        <option value="6M">Preceding </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Calendar (Payment-Fixing-Holiday) </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="BI Business Calendar (Jakarta)" className="form-control" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Reference </label>

                <div className="col-lg-5">
                    <input type="input" placeholder="" className="form-control" value="Format KPEI - BI" />

                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Rounding Payment </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="1M">Rp 1.-  </option>
                        <option value="3M">0.00001 for interest rate </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Forward Starting* </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="1M">Eligible </option>
                        <option value="3M">Not Eligible </option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label">Stub Period Type* </label>

                <div className="col-lg-5">
                    <select id="inputState" className="form-control">
                        <option value="1M">Short-Long Initial </option>
                        <option value="3M">Short-Long Final </option>
                    </select>
                </div>
            </div>
        </div >
    )
}

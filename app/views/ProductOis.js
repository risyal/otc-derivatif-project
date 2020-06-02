import React, { Component } from 'react'
import { Link } from 'react-router';
import HeaderPage from '../components/common/HeaderPage';

const ProductOis = (props) => {
    var ket = props.location.state.id;

    const handleButton = (e) => {
        // e.preventDefault();
        console.log(e);
    };
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
                                    <div className="col-sm-11 m-b-xs">

                                        <Link to={{
                                            pathname: '/administration/product',
                                            state: { id: 'asdasda Pertama' }
                                        }}> <button type="button" className="btn btn-white btn-sm" >
                                                IRS
                                        </button></Link>
                                        <div data-toggle="buttons" className="btn-group btn-group-toggle">

                                            <label className="btn btn-sm btn-white active" >
                                                <input type="radio" id="option1" name="options" />
                                                 OIS </label>
                                        </div>
                                        <button type="button" className="btn btn-white btn-sm" >

                                            <Link to={{
                                                pathname: '/productDndf',
                                                state: { id: 'Data Pertama' }
                                            }}> DNDF</Link>
                                        </button>
                                    </div>
                                    <Link to={{
                                        pathname: '/fake'
                                    }}>edit</Link>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <div className="table-responsive">
                                    <table className="table  table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-center">Attribute</th>
                                                <th scope="col" className="text-center">Interest Rate Swap</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Market Side</td>
                                                <td>Receive | Pay</td>
                                            </tr>
                                            <tr>
                                                <td>Counterparts</td>
                                                <td>Members Code</td>
                                            </tr>
                                            <tr>
                                                <td>Currency</td>
                                                <td>IDR</td>
                                            </tr>
                                            <tr>
                                                <td>Leg Type/sub-product</td>
                                                <td>Fixed/Float (on default) | Float/Float </td>
                                            </tr>
                                            <tr>
                                                <td>Trade Date</td>
                                                <td>DDMMYYYY</td>
                                            </tr>
                                            <tr>
                                                <td>Effective/Commencement Date</td>
                                                <td>DDMMYYYY (+2 trade date)</td>
                                            </tr>
                                            <tr>
                                                <td>Maturity/termination Date</td>
                                                <td>DDMMYYYY</td>
                                            </tr>
                                            <tr>
                                                <td>Settlement Type</td>
                                                <td>IDR Net Cash</td>
                                            </tr>
                                            <tr>
                                                <td>Contract Term	</td>
                                                <td>1 minggu | 1 bulan | 3 bulan | 6 bulan | 9 bulan | 12 bulan | others</td>
                                            </tr>
                                            <tr>
                                                <td>Notional Amount</td>
                                                <td>IDR Min Rp 1.000.000.000</td>
                                            </tr>
                                            <tr>
                                                <td>Payment Frequency (Fix and Float)</td>
                                                <td>On Maturity Date  </td>
                                            </tr>
                                            <tr>
                                                <td>Valuation/Fixing Date</td>
                                                <td>Daily</td>
                                            </tr>
                                            <tr>
                                                <td>Floating Rate Index</td>
                                                <td>INDONIA</td>
                                            </tr>
                                            <tr>
                                                <td>Spread per</td>
                                                <td>0.00000 %</td>
                                            </tr>
                                            <tr>
                                                <td>Day Count Fraction (Fix and Float)</td>
                                                <td>Act/360 | ACT/ACT | ACT/365 | 30/360</td>
                                            </tr>
                                            <tr>
                                                <td>Floating Rate Reset Frequency</td>
                                                <td>1D</td>
                                            </tr>
                                            <tr>
                                                <td>Floating Rate Index Tenor</td>
                                                <td>Overnight</td>
                                            </tr>
                                            <tr>
                                                <td>Business Day Convention</td>
                                                <td>Mod Following (default) | Following | Preceding</td>
                                            </tr>
                                            <tr>
                                                <td>Calendar (Payment-Fixing-Holiday)</td>
                                                <td>BI Business Calendar (Jakarta) ??</td>
                                            </tr>
                                            <tr>
                                                <td>Reference</td>
                                                <td>Format KPEI - BI </td>
                                            </tr>
                                            <tr>
                                                <td>Rounding</td>
                                                <td>Rp 1.- | 0.00001 for interest rate</td>
                                            </tr>
                                            <tr>
                                                <td>Forward Starting*</td>
                                                <td>Eligible | Not Eligible</td>
                                            </tr>
                                            <tr>
                                                <td>Stub Period Type*</td>
                                                <td>Short-Long Initial | Short-Long Final</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* 
                                    <div className="text-right">
                                        <a to="/fake" > Download CSV</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductOis;

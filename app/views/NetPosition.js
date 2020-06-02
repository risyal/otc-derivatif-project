import React, { Component } from 'react';
import HeaderPage from '../components/common/HeaderPage';

class NetPosition extends Component {

    render() {
        return (
            <div>
                <HeaderPage
                    name="Transaction - Net Position"
                    namePage="Net Position"
                    parentPage="Transaction"
                ></HeaderPage>
                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox ">
                                <div className="ibox-title">
                                    {/* <h5> </h5> */}
                                    <div className="row">
                                        <div className="col-sm-5 m-b-xs">
                                            <select className="form-control-sm form-control input-s-sm inline">
                                                <option value="0">Member</option>
                                                <option value="1">Option 2</option>
                                                <option value="2">Option 3</option>
                                                <option value="3">Option 4</option>
                                            </select>

                                        </div>
                                        <div className="col-sm6 m-b-xs">
                                            {/* <input placeholder="Search" type="text" className="form-control form-control-sm" /> */}
                                        </div>
                                        <div className="col-sm-1 ">
                                            {/* <button type="button" className="btn btn-sm btn-primary">Go!
                                                    </button> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="ibox-content">
                                    <div className="table-responsive">
                                        <table className="table  table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">UTI</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Product</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Fixed Rate</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Refference Rate</th>
                                                    <th scope="col" className="text-center" colSpan="2">Member</th>
                                                    <th scope="col" className="text-center" colSpan="2">Client</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Buy</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Sell</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Fix</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Float</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Value</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Payment Freq</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Maturity Date</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Next Coupon Payment</th>
                                                    <th scope="col" className="text-center" style={{ verticalAlign: "middle" }} rowSpan="2">Day Count Fraction</th>
                                                </tr>
                                                <tr>
                                                    <th scope="col" className="text-center">SID</th>
                                                    <th scope="col" className="text-center">LEI</th>
                                                    <th scope="col" className="text-center">SID</th>
                                                    <th scope="col" className="text-center">LEI</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>UTI</td>
                                                    <td>IRS1</td>
                                                    <td>7%</td>
                                                    <td>JIBOR 3M</td>
                                                    <td>MEM1</td>
                                                    <td>LEI1</td>
                                                    <td>CLIENT2</td>
                                                    <td>LEI2</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>200</td>
                                                    <td>200000</td>
                                                    <td>3 bulan</td>
                                                    <td>02-May-20</td>
                                                    <td>02-May-20</td>
                                                    <td>350/360</td>
                                                </tr>
                                                <tr>
                                                    <td>UTI</td>
                                                    <td>IRS2</td>
                                                    <td>7%</td>
                                                    <td>JIBOR 3M</td>
                                                    <td>MEM2</td>
                                                    <td>LEI2</td>
                                                    <td>CLIENT3</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>200</td>
                                                    <td></td>
                                                    <td>200000</td>
                                                    <td>1 Bulan</td>
                                                    <td>02-May-20</td>
                                                    <td>02-May-20</td>
                                                    <td>ACT/360</td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td>UTI</td>
                                                    <td>IRS3</td>
                                                    <td>7%</td>
                                                    <td>JIBOR 3M</td>
                                                    <td>MEM3</td>
                                                    <td>LEI3</td>
                                                    <td>CLIENT4</td>
                                                    <td>LEI4</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>200</td>
                                                    <td>200000</td>
                                                    <td>2 Bulan</td>
                                                    <td>02-May-20</td>
                                                    <td>02-May-20</td>
                                                    <td>360/361</td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td>UTI</td>
                                                    <td>OIS1</td>
                                                    <td>7%</td>
                                                    <td>INDONIA</td>
                                                    <td>MEM1</td>
                                                    <td>LEI1</td>
                                                    <td>CLIENT2</td>
                                                    <td>CLIENT2</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>200</td>
                                                    <td></td>
                                                    <td>200000</td>
                                                    <td>3 Bulan</td>
                                                    <td>02-May-20</td>
                                                    <td>02-May-20</td>
                                                    <td>ACT/361</td>
                                                    

                                                </tr>
                                                <tr>
                                                    <td>UTI</td>
                                                    <td>OIS2</td>
                                                    <td>7%</td>
                                                    <td>INDONIA</td>
                                                    <td>MEM1</td>
                                                    <td>LEI1</td>
                                                    <td>CLIENT2</td>
                                                    <td>LEI2</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>200</td>
                                                    <td></td>
                                                    <td>200000</td>
                                                    <td>1 Bulan</td>
                                                    <td>03-May-20</td>
                                                    <td>03-May-20</td>
                                                    <td>361/362</td>
                                                   
                                                </tr>
                                                <tr>
                                                    <td>UTI</td>
                                                    <td>OIS3</td>
                                                    <td>7%</td>
                                                    <td>INDONIA</td>
                                                    <td>MEM3</td>
                                                    <td>LEI3</td>
                                                    <td>CLIENT3</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>200</td>
                                                    <td>200000</td>
                                                    <td>2 Bulan</td>
                                                    <td>04-May-20</td>
                                                    <td>04-May-20</td>
                                                    <td>ACT/362</td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
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
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
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

export default NetPosition
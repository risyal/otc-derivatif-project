import React from 'react'

export default function AtsDndf() {
    return (
        <div>
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
                            <td>Trade Deal Date</td>
                            <td>Business Days</td>
                        </tr>
                        <tr>
                            <td>Currency Pair</td>
                            <td>USD/IDR</td>
                        </tr>
                        <tr>
                            <td>Forward Rate</td>
                            <td>IDR</td>
                        </tr>
                        <tr>
                            <td>Notional Foreign Currency</td>
                            <td>USD</td>
                        </tr>
                        <tr>
                            <td>Fixing Date</td>
                            <td>– 2 Settlement Date</td>
                        </tr>
                        <tr>
                            <td>Market Side</td>
                            <td>Buy | Sell</td>
                        </tr>
                        <tr>
                            <td>Forward Point/Spread</td>
                            <td>IDR</td>
                        </tr>
                        <tr>
                            <td>Reference Rate</td>
                            <td>JISDOR</td>
                        </tr>
                        <tr>
                            <td>Settlement Type</td>
                            <td>Non Deliverable</td>
                        </tr>
                        <tr>
                            <td>Settlement Date</td>
                            <td>BI Business Day (Jakarta)</td>
                        </tr>
                        <tr>
                            <td>Settlement Currency</td>
                            <td>IDR</td>
                        </tr>
                        <tr>
                            <td>Tenor</td>
                            <td>Min :3 business days | Max : 1 Years</td>
                        </tr>
                        <tr>
                            <td>Price Source Disruption</td>
                            <td>Refer to PBI (Usually using D-1 Price)</td>
                        </tr>
                        <tr>
                            <td>Rounding</td>
                            <td>Rp.1.- </td>
                        </tr>
                        <tr>
                            <td>Notional Amount</td>
                            <td>IDR</td>
                        </tr>
                    </tbody>
                </table>
                {/* 
                                    <div className="text-right">
                                        <a to="/fake" > Download CSV</a>
                                    </div> */}
            </div>
        </div>
    )
}

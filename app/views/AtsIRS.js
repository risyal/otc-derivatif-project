import React from 'react'

export default function AtsIRS() {
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
                            <td>Leg Type</td>
                            <td>Fixed | Float</td>
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
                            <td>Settlement Type	</td>
                            <td>Net Cash</td>
                        </tr>
                        <tr>
                            <td>Contract Term</td>
                            <td>1 minggu | 1 bulan | 3 bulan | 6 bulan | 9 bulan | 12 bulan | others</td>
                        </tr>
                        <tr>
                            <td>Notional Amount</td>
                            <td>IDR Min Rp 1.000.000.000</td>
                        </tr>
                        <tr>
                            <td>Payment Frequency (Fix and Float)</td>
                            <td>1M | 3M | 6M | 1Y </td>
                        </tr>
                        <tr>
                            <td>Valuation/Fixing Date</td>
                            <td>Def :-2 payment date</td>
                        </tr>
                        <tr>
                            <td>Floating Rate Index</td>
                            <td>JIBOR</td>
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
                            <td>1M | 3M | 6M | 1Y</td>
                        </tr>
                        <tr>
                            <td>Floating Rate Index Tenor</td>
                            <td>1M | 3M | 6M | 1Y</td>
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
                            <td>Rounding Payment</td>
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
            </div>
        </div>
    )
}

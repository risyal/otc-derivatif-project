import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import HeaderPage from '../components/common/HeaderPage';


class AtsInquiryTrade extends Component {

    render() {
        return (
            <div>
                <HeaderPage
                    name="ATS - Inquiry Trade"
                    namePage="Inquiry Trade"
                    parentPage="ATS"
                ></HeaderPage>

                <div className="wrapper wrapper-content animated fadeInRight content">
                    <div className="row">

                        <div className="col-lg-12">

                            <div className="ibox">
                                <div className="ibox-title">

                                    <div className="row">
                                        <div className="col-sm-8 m-b-xs"></div>
                                        <div className="col-sm-3 m-b-xs">
                                            <input placeholder="Search" type="text" className="form-control form-control-sm"></input>
                                        </div>
                                        <div className="col-sm-1 ">
                                            <button type="button" className="btn btn-sm btn-primary">GO</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="ibox-content">
                                    <div className="text-right">
                                        <a>Download CSV</a>

                                    </div>

                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Tanggal</th>
                                                    <th scope="col">Jam</th>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Trade Number</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Counterpart</th>
                                                    <th scope="col">Value</th>
                                                    <th scope="col">Maturity Date</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {/* <th scope="row">1</th> */}
                                                    <td>2020-03-03</td>
                                                    <td>15:01::25</td>
                                                    <td>Client123</td>
                                                    <td>TRD012345</td>
                                                    <td>OIS</td>
                                                    <td>OIS</td>
                                                    <td>BMAN123</td>
                                                    <td>10.000.000.000.-</td>
                                                    <td>Delivered</td>
                                                    <td><a href="#">Detail</a></td>

                                                </tr>


                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">

                                                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>

                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" className="page-link">1</a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0" className="page-link">2</a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="3" tabindex="0" className="page-link">3</a>
                                            </li>
                                            <li className="paginate_button page-item " id="DataTables_Table_0_next">
                                                <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="4" tabindex="0" className="page-link">Next</a>
                                            </li>

                                        </ul>



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

export default AtsInquiryTrade
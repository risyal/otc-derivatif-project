import React, { Component } from 'react';

class TransactionPage extends Component {

    render() {
        return (
        <div>

            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>Ats</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a><span><Link to="/ats"><strong>Ats</strong></Link></span></a>
                        </li>
                    

                    </ol>

                </div>
            </div>
            <div className="wrapper wrapper-content animated fadeInRight content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-left m-t-lg">
                            <h2>
                                Transaction - Net Position
                            </h2>
                            
                        </div>
                        <div className="ibox-content">
                            <div className="row">
                                <div className="form-group">
                                    <label>Member</label>

                                    <select id="inputState" className="form-control">
                                                <option selected>Today</option>
                                                <option>...</option>
                                                
                                    </select>

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

export default TransactionPage
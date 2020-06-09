import React, { Component } from 'react';
import { Link, Location } from 'react-router';


class Home extends Component {

    render() {
        return (

        <div className="body">
            <div className="container">
                <span className="logo">CCP SBNT</span>
            </div>

            <section id="log" className="container">
                <div className="row">
                    <div className="col-lg-6" id="one">
                        <h2 className="h2">Welcome to</h2>
                        <h6 className="h6">
                            Central Counterparty Untuk
                            Transaksi Derivatif Suku Bunga dan <br/>Nilai Tukar Over-The-Counter
                        </h6>
                   </div>

                   <div className="col-lg-6">
                       <div className="login-content">
                           <form>
                               <img src="img/site-logo.png" className="logokpei"></img>
                               <div className="input-div one">
                                    <div className="i">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <div className="div">
                                        <input placeholder="Username" type="text" className="input "/>
                                    </div>
                               </div>
                               <div className="input-div pass">
                                    <div className="i"> 
                                        <i className="fa fa-lock"></i>
                                    </div>
                                    <div className="div">
                                        <input placeholder="Password" type="password" className="input"/>
                                    </div>
                                </div>
                                <div className="input-div file">
                                    <div className="i"> 
                                        <i className="fa fa-file-text"></i>
                                    </div>
                                    <div>
                                       <h5>Key File</h5>
                                    </div>
                                    <div></div>
                                    <div className="div choose-file">
                                        <input type="file" className="form-control-file"/>
                                    </div>
                                </div>
                                <Link to="/ats">
                                <input type="submit" className="btn-home" value="Login"/>
                                </Link>

                           </form>

                       </div>

                   </div>

                </div>


            </section>

        </div>    
    
        )
    }

    

}

export default Home
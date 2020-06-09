import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import AtsView from '../views/AtsPage';
import TransactionView from '../views/TransactionPage';
import SettlementSchedule from '../views/SettlementSchedule';
import SettlementHistory from '../views/SettlementHistory';
import accountDetail from '../views/AccountPage';
import ReportPage from '../views/ReportPage';
import ReportView from '../views/ReportView';
import AdministrationView from '../views/AdministrationPage';
import AuditTrailView from '../views/AuditTrailPage';
import UserManagementView from '../views/UserManagementPage'
import MemberPageView from '../views/MemberPage';
import ProductView from '../views/ProductPage';
import ClientView from '../views/ClientsPage';
import SystemView from '../views/SystemPage';
import CalenderView from '../views/CalenderPage';
import AtsInquiryTradeView from '../views/AtsInquiryTrade';
import Approval from '../views/ApprovalPage';
import ApprovalDetail from '../views/ApprovalDetail';
import NetPositionView from '../views/NetPosition';
import TradeInquiryView from '../views/TradeInquiry';
import NovationReportView from '../views/novationReport';
import ClearingView from '../views/ClearingView';
import WithdrawallView from '../views/Widthrawall';
import MovementView from '../views/MovementJournal';
import ManualSetllView from '../views/ManualSettlement';
import ProductOisView from '../views/ProductOis';
import ProductDndfView from '../views/ProductDndf';
import HomeView from '../views/Home'


import { Route, Router, IndexRedirect, browserHistory } from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/home" />
            {/* <Route path="main" component={MainView}> </Route> */}
            {/* <Route path="minor" component={MinorView}> </Route> */}
            <Route path="ats" component={AtsView}> </Route>
            <Route path="transaction" component={TransactionView}></Route>
            <Route path="settlementsch" component={SettlementSchedule}></Route>
            <Route path="settlementhstr" component={SettlementHistory}></Route>
            <Route path="accountDetail" component={accountDetail}></Route>
            <Route path="report" component={ReportPage}></Route>
            <Route path="reportView" component={ReportView}></Route>
            <Route path="administration" component={AdministrationView}></Route>
            <Route path="administration/auditTrail" component={AuditTrailView}></Route>
            <Route path="administration/userManagement" component={UserManagementView}></Route>
            <Route path="administration/member" component={MemberPageView}></Route>
            <Route path="administration/product" component={ProductView}></Route>
            <Route path="administration/client" component={ClientView}></Route>
            <Route path="administration/System" component={SystemView}></Route>
            <Route path="administration/calender" component={CalenderView}></Route>
            <Route path="ats/inquiryTrade" component={AtsInquiryTradeView}></Route>
            <Route path="approval" component={Approval}></Route>
            <Route path="approvaldetail" component={ApprovalDetail}></Route>
            <Route path="netPosition" component={NetPositionView}></Route>
            <Route path="tradeInquiry" component={TradeInquiryView}></Route>
            <Route path="novationReport" component={NovationReportView}></Route>
            <Route path="clearing" component={ClearingView}></Route>
            <Route path="withdrawall" component={WithdrawallView}></Route>
            <Route path="movementjrnl" component={MovementView}></Route>
            <Route path="manualsttl" component={ManualSetllView}></Route>
            <Route path="productOis" component={ProductOisView}></Route>
            <Route path="productDndf" component={ProductDndfView}></Route>
           
        </Route>
        <Route path="home" component={HomeView}></Route>
    </Router>

);
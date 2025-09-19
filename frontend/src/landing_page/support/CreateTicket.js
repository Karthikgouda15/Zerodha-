import React from "react";
 
 function CreateTicket() {
   return (
     <div className="container">
       <div className="row p-5 mt-5 mb-5">
         <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
         <div className="col-4 p-5 mt-2 mb-2">
           <h4 className="">
             <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
           </h4>
           <a href="/Online" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             Online Account Opening
           </a>
           <br />
           <a href="/Offline" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             Offline Account Opening
           </a>
           <br />
           <a href="/company" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             Company, Partnership and HUF Account
           </a>
           <br />
           <a href="/Opening" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             Opening
           </a>
           <br />
           <a href="/NRi" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             NRI Account Opening
           </a>
           <br />
           <a href="/Charges" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             Charges at Zerodha
           </a>
           <br />
           <a href="/Zerodha" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             Zerodha IDFC FIRST Bank 3-in-1 Account
           </a>
           <br />
           <a href="/Getting" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             Getting Started
           </a>
           <br />
         </div>
         <div className="col-4 p-5 mt-2 mb-2">
           <h4 className="">
           <i class="fa fa-circle-o" aria-hidden="true"></i>  Coin
           </h4>
           <a href="/Understanding" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             Understanding mutual funds and Coin </a>
           <br />
           <a href="/Coin" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Coin app
           </a>
           <br />
           <a href="/coin" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Coin web
           </a>
           <br />
           <a href="/Transactions" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Transactions and reports
           </a>
           <br />
           <a href="/National" style={{ textDecoration: "none", lineHeight: "2.5" }}>
             National Pension Scheme (NPS)
           </a>
           
           <br />
         </div>
         <div className="col-4 p-5 mt-2 mb-2">
           <h4 className="">
           <i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account
           </h4>
           <a href="/profile" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Your Profile
           </a>
           <br />
           <a href="/account" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Account modification
           </a>
           <br />
           <a href="/client" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Client Master Report (CMR) and Depository Participant (DP)
           </a>
           <br />
           <a href="/nomination" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Nomination
           </a>
           <br />
           <a href="/transfer" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Transfer and conversion of securities
           </a>
           
           
         </div>
         <div className="col-4 p-5 mt-2 mb-2">
           <h4 className="">
           <i class="fa fa-bar-chart" aria-hidden="true"></i>
 Kite
           </h4>
           <a href="/IPO" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           IPO
           </a>
           <br />
           <a href="/Trading" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Trading FAQs
           </a>
           <br />
           <a href="/Margin" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Margin Trading Facility (MTF) and Margins
           </a>
           <br />
           <a href="/Charts" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Charts and orders
           </a>
           <br />
           <a href="/alerts" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Alerts and Nudges
           </a>
           <br />
           <a href="/general" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           General
           </a>
           
         </div>
         <div className="col-4 p-5 mt-2 mb-2">
           <h4 className="">
           <i class="fa fa-credit-card" aria-hidden="true"></i> Funds
           </h4>
           <a href="/Add" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Add money
           </a>
           <br />
           <a href="/Withdraw" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Withdraw money
           </a>
           <br />
           <a href="/add" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Add bank accounts
           </a>
           <br />
           <a href="/mandates" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           eMandates
           </a>
           
           
         </div>
         <div className="col-4 p-5 mt-2 mb-2">
           <h4 className="">
           <i class="fa fa-circle" aria-hidden="true"></i> Console
           </h4>
           <a href="/portfolio" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Portfolio
           </a>
           <br />
           <a href="/corporate" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Corporate actions
           </a>
           <br />
           <a href="/funds" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Funds statement

           </a>
           <br />
           <a href="/reports" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Reports
           </a>
           <br />
           <a href="/profile" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Profile
           </a>
           <br />
           <a href="/segments" style={{ textDecoration: "none", lineHeight: "2.5" }}>
           Segments
           </a>
           
         </div>
       </div>
     </div>
   );
 }
 
 export default CreateTicket;
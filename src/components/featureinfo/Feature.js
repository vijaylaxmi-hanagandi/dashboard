import React from 'react';
import "./Feature.css";
import {ContentPasteSearch,CalendarMonth,ReportProblem } from '@mui/icons-material';


export default function Feature() {
  return (
    <div className='featured'>yet to be allocated
        <div className="featuredItem">Total Tickets
        <div className="featuredMoneyContainer">
        <span className="featuredMoney">781
        <ContentPasteSearch /></span>
       </div>
</div>
        <div className="featuredItem">SPD Today
       <div className="featuredMoneyContainer">
        <span className="featuredMoney">34
        <CalendarMonth /></span>
        </div>
        </div>
          <div className="featuredItem">Breached Tickets
       <div className="featuredMoneyContainer">
        <span className="featuredMoney">303
        <ReportProblem /></span>

          </div>
          </div>
    </div>
  );
}

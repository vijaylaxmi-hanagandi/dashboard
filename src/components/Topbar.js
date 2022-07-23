import React from 'react';
import "./Topbar.css";
import {NotificationsNone,Language,Settings} from '@mui/icons-material';

 function Topbar() {
  return (
    <div className='topbar'>
         <div className='topbarWraper'>
<div className='topLeft'>
<span className='logo'>Jeeves Demand Dashboard</span>
</div>
<div className='topRight'>
        <div className='topbarIconsContainer'>
            <NotificationsNone />
            <span className="topIconBadge">2</span>
            </div>
            <div className='topbarIconsContainer'>
            < Language />
            <span className="topIconBadge">2</span>
            </div>
            <div className='topbarIconsContainer'>
            <Settings />
           
            </div>
        </div>

         </div>
    </div>
  );
}
export default Topbar;

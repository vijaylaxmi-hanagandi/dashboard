import './Sidebar.css'
import {LineStyle,Timeline,TrendingUp} from '@mui/icons-material';

 function Sidebar() {
  return (
    <div className='sidebar'>
<div className="sidebarWrapper">
<div className="sidebarMenu">
<h3 className="sidebarTitle">Dashboard</h3>
<ul className="sidebarList">
<li className="sidebarListItem active">
<LineStyle className='sidebarIcon' />
 Home
</li>
<li className="sidebarListItem">
<Timeline className='sidebarIcon' />
 Provider type
</li>
<li className="sidebarListItem">
<TrendingUp className='sidebarIcon'/>
 total tickets
</li>
</ul>
</div>
</div>
      </div>
  );
}
export default Sidebar;

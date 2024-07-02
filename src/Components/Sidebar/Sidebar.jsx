


import SidebarItem from './SidebarItem'
import linksData from '../../data/datas'



export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column">
      <div className="logo-container">
        <img src='./small-logo.png' className='logo' alt='zeta'></img>
      </div>
      <div className='menu-container'>
        {linksData.map((item, index) => <SidebarItem key={index} item={item} />)}

      </div>
      <div className='helpBoxWrapper'>
      <div class="sidebar-img-section">
        <div class="sidebar-img-content">
          <img className="img-fluid" src="side-bar.png" alt=""/>
          <h4>Need Help ?</h4><a class="txt" href="https://pixelstrap.freshdesk.com/support/home" data-bs-original-title="" title="">Raise ticket at "support@pixelstrap.com"</a><a class="btn btn-secondary" href="https://themeforest.net/user/pixelstrap/portfolio" data-bs-original-title="" title="">Buy Now</a>
        </div>
      </div>

      </div>
    </div>
  )
}
import './topbar.css'
import {Search, Person, Notifications } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">ShiblySocial</span>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchIcon'/>
          <input placeholder='Search for a friend, post or video' className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem messenger">
            <i className="fa-brands fa-facebook-messenger"></i>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <img src={require('../../assets/person/2.jpeg')} alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  )
}

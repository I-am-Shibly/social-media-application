import './topbar.css'
import { AuthContext } from '../../context/AuthContext'
import { Search, Person, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

export default function Topbar() {
  const { user } = useContext(AuthContext)

  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to='/' style={{textDecoration: 'none'}}>
          <span className="logo">ShiblySocial</span>
        </Link>
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
          <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? require(user.profilePicture) : require("../../assets/person/noAvatar.png")} alt="" className="topbarImg" />
          </Link>
        </div>
      </div>
    </div>
  )
}

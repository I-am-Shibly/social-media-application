import { Users } from '../../dummyData'
import Online from '../Online/Online'
import './rightbar.css'

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
         <div className="birthdayContainer">
          <img src={require("../../assets/gift.png")} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Shibly</b> and <b>3 othes</b> have birthday today!
          </span>
        </div>
        <img src={require("../../assets/ad.png")} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(user => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Dhaka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Dhaka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={require("../../assets/person/3.jpeg")} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jaber Khan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={require("../../assets/person/3.jpeg")} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jaber Khan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={require("../../assets/person/3.jpeg")} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jaber Khan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={require("../../assets/person/3.jpeg")} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jaber Khan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={require("../../assets/person/3.jpeg")} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jaber Khan</span>
          </div>
          <div className="rightbarFollowing">
            <img src={require("../../assets/person/3.jpeg")} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jaber Khan</span>
          </div>
          
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        { profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

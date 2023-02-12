import { Add, Remove } from "@mui/icons-material"
import axios from "axios"
import { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { Users } from '../../dummyData'
import Online from '../Online/Online'
import './rightbar.css'

export default function Rightbar({ user }) {

  const [friends, setFriends] = useState([])
  const { user: currentUser, dispatch } = useContext(AuthContext)
  const [followed, setFollowed] = useState(currentUser.followings.includes(currentUser.followings.includes(user?._id)))

  useEffect(() => {
    if (user) {
      setFollowed(currentUser.followings.includes(user._id))
    }
  }, [currentUser, user])

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(`http://localhost:5000/api/users/friends/${user._id}`)
        setFriends(friendList.data)
      } catch (err) {
        console.log(err);
      }
    }
    getFriends()
  }, [user])

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`http://localhost:5000/api/users/${user._id}/unfollow`, { userId: currentUser._id })
        dispatch({ type: "UNFOLLOW", payload: user._id})
      } else {
        await axios.put(`http://localhost:5000/api/users/${user._id}/follow`, { userId: currentUser._id })
        dispatch({ type: "FOLLOW", payload: user._id })
      }
      setFollowed(!followed)
    } catch (err) {

    }
  }

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
            <Online key={user._id} user={user} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username &&
          (<button className="rightbarFollowButton" onClick={handleClick} key={user._id}>
            {followed ? "unfollow" : "follow"}
            {followed ? <Remove /> : <Add />}
          </button>)
        }
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
          </div>
        </div>

        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          {friends.map(friend => (
            <Link to={`/profile/${friend.username}`} style={{ textDecoration: "none" }}>
              <div className="rightbarFollowing" key={friend._id}>
                <img src={friend.profilePicture ? require(friend.profilePicture) : require("../../assets/person/3.jpeg")} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

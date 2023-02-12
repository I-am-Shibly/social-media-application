import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Feed from "../../components/Feed/Feed"
import Rightbar from "../../components/Rightbar/Rightbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar"
import './profile.css'

function Profile() {
  const [user, setUser] = useState({})
  const { username } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:5000/api/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser()
  }, [username])

  return (
    <>
      {Object.keys(user).length !== 0 && (
        <>
          <Topbar />
          <div className="profile">
            <Sidebar />
            <div className="profileRight">
              <div className="profileRightTop">
                <div className="profileCover">
                  <img src={user.coverPicture ? require(user.coverPicture) : require("../../assets/nocover.jpg")} alt="" className="profileCoverImg" />
                  <img src={user.profilePicture || require("../../assets/person/noAvatar.png")} alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                  <h4 className="profileInfoName">{user.username}</h4>
                  <span className="profileInfoDesc">{user.desc}</span>
                </div>
              </div>
              <div className="profileRightBottom">
                <Feed username={username} />
                <Rightbar user={user} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )

}

export default Profile
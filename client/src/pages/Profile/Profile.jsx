import Feed from "../../components/Feed/Feed"
import Sidebar from "../../components/Sidebar/Sidebar"
import Topbar from "../../components/Topbar/Topbar"
import Rightbar from "../../components/Rightbar/Rightbar"
import './profile.css'

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">

          <div className="profileRightTop">
            <div className="profileCover">
              <img src={require("../../assets/post/7.jpeg")} alt="" className="profileCoverImg" />
              <img src={require("../../assets/person/2.jpeg")} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Samiul Islam</h4>
              <span className="profileInfoDesc">Hello world!</span>
            </div>
         </div>
          <div className="profileRightBottom">
             <Feed/>
             <Rightbar profile/>
         </div>
        </div>
      </div>
    </>
  )
}

export default Profile
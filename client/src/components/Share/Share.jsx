import { Cancel, EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './share.css'

function Share() {
    const { user } = useContext(AuthContext)
    const desc = useRef()
    const [file, setFile] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }

        if (file) {
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append('file', file)
            data.append('name', fileName)
            newPost.img = fileName

            try {
                await axios.post("http://localhost:5000/api/upload", data)
            } catch (err) {
                console.log(err);
            }
        }

        try {
            await axios.post("http://localhost:5000/api/posts/", newPost)
            window.location.reload()
        } catch (err) {

        }
    }

    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <Link to={`/profile/${user.username}`}>
                        <img src={user.profilePicture ? require(user.profilePicture) : require("../../assets/person/noAvatar.png")} alt="" className="shareProfileImg" />
                    </Link>
                    <input placeholder={`what's on your mind ${user.username}?`} className="shareInput" ref={desc} />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className='shareImgContainer'>
                        <img className='shareImg' src={URL.createObjectURL(file)} alt="" />
                        <Cancel className='shareCancel' onClick={()=>setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMedia htmlColor='darkcyan' className='shareIcon' />
                            <span className="shareOptionText">Photo or Video</span>
                            <input type="file" id='file' accept='.png,.jpg,.jpeg' onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button type='submit' className='shareButton'>Share</button>
                </form>
            </div>
        </div>
    )
}

export default Share
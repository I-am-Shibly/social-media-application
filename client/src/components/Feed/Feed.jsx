import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Post from '../Posts/Post'
import Share from '../Share/Share'
import {AuthContext} from '../../context/AuthContext'
import './feed.css'

export default function Feed({ username }) {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`http://localhost:5000/api/posts/profile/${username}`)
        : await axios.get(`http://localhost:5000/api/posts/timeline/${user._id}`)
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    }
    fetchPosts()
  }, [username, user._id])

  return (
    <div className='feed'>
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        { console.log(username)}
        {posts.map((post) => {
          return <Post key={post._id} post={post} />
        }) }
      </div>
    </div>
  )
}

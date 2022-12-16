import Post from '../Posts/Post'
import Share from '../Share/Share'
import {Posts} from '../../dummyData'
import './feed.css'

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => {
          return <Post key={post.id} post={post} />
        }) }
      </div>
    </div>
  )
}

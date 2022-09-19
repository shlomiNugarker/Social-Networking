import { ImgPreview } from './ImgPreview'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'
import { utilService } from '../services/utilService'
import { useDispatch } from 'react-redux'
import { Post } from '../models'
import { RootState } from '../store/index'
import { bindActionCreators } from 'redux'
import { actions } from '../store/allActions'

interface Props {
  post: Post
}

export const PostPreview: React.FC<Props> = ({ post }) => {
  const dispatch = useDispatch()

  const [isUserWatchedPost, setisUserWatchedPost] = useState<boolean>(false)

  const likeStyle = post.didLike ? 'liked' : ''
  const isTwoImgs = post.images?.length > 1

  const { sendImpressionFromUser } = bindActionCreators(actions, dispatch)

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const postHightBottom = getBottomPostHight()

    if (!postHightBottom) return
    if (postHightBottom < windowHeight) {
      if (isUserWatchedPost) return
      setisUserWatchedPost(true)
      // console.log('user watched post :', post.text)
      if (typeof post.userId === 'string' && typeof post.id === 'string') {
        sendImpressionFromUser(post.userId, post.id)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // const getPostHeight = () => {
  //   if (!isImgLoaded) return
  //   const height = document
  //     .getElementById(post.id)
  //     .getBoundingClientRect().height

  //   return height
  // }

  const getBottomPostHight = () => {
    if (typeof post.id !== 'string') return
    const bottomPostHeight = (
      document.getElementById(post.id) as HTMLElement
    ).getBoundingClientRect().bottom

    return bottomPostHeight
  }

  return (
    <div>
      <section
        id={typeof post.id !== 'number' ? post.id : ''}
        className="post-preview"
      >
        <div className="post-header">
          <div className="img-container">
            <img src={post.avatar} alt="" className="img" />
          </div>
          <div className="user-details">
            <p className="name">{post.username}</p>
            <div>
              <p className="shop-name">{post.shopName}</p>
              <span className="time">
                <TimeAgo date={post.date} />
              </span>
            </div>
          </div>
        </div>

        <div className="post-body">
          <p className="txt">{post.text}</p>

          <div className="img-list">
            {post.images && post.images[0] && (
              <ImgPreview
                key={utilService.makeId()}
                url={post.images[0]}
                isTwoImgs={isTwoImgs}
              />
            )}
            {post.images && post.images[1] && (
              <ImgPreview
                key={utilService.makeId()}
                url={post.images[1]}
                isTwoImgs={isTwoImgs}
              />
            )}
          </div>
        </div>

        <div className="post-actions-details">
          <div>
            <span className="like-icon">
              <AiOutlineLike />
            </span>
            <p className="number">23</p>
          </div>
          <div>
            {post.comments > 0 && <p className="number">{post.comments}</p>}
            {post.comments > 0 && <p>comments</p>}
          </div>
        </div>

        <div className="post-actions">
          <div className="btns">
            <div className={'btn-container like-btn ' + likeStyle}>
              <span>
                <AiOutlineLike />
              </span>
              <button>Like</button>
            </div>
            <div className="btn-container comment-btn">
              <span>
                <FaRegComment />
              </span>
              <button>Comment</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

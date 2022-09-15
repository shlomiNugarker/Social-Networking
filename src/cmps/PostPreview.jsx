import { ImgPreview } from './ImgPreview'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'
import { utilService } from '../services/utilService'
import { useDispatch } from 'react-redux'
import { sendImpressionFromUser } from '../store/actions/postActions'

export function PostPreview({ post }) {
  const dispatch = useDispatch()

  const likeStyle = post.didLike ? 'liked' : ''
  const isTwoImgs = post.images?.length > 1

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const postHight = getPostHight()

    if (postHight < windowHeight) {
      console.log('post seen !')
    }
  }

  useEffect(() => {
    dispatch(sendImpressionFromUser(post.userId, post.id))
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getPostHight = () => {
    const bottomPostHeight = document
      .getElementById('6319f52ed519ba15e06d72a7') // 3th post => post.id
      .getBoundingClientRect().bottom

    return bottomPostHeight
  }

  return (
    <section id={post.id} className="post-preview">
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
  )
}

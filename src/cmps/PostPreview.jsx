import { ImgPreview } from './ImgPreview'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

export function PostPreview() {
  const url =
    'https://images.unsplash.com/photo-1663050005090-86b77b8c01e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'

  return (
    <section className="post-preview">
      <div className="post-header">
        <div className="img-container">
          <img
            src="https://images.unsplash.com/photo-1663050005090-86b77b8c01e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt=""
            className="img"
          />
        </div>
        <div className="user-details">
          <p className="name">Maria Geller</p>
          <div>
            <p>Crafts ideas</p>
            <span className="time">1h</span>
          </div>
        </div>
      </div>

      <div className="post-body">
        <p className="txt">
          Let's get things rolling for Halloween! Dump any Halloween craft you
          have made or bought! Getting ready for high season !
        </p>
        <div className="img-list">
          <ImgPreview url={url} />
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
          <p className="number">23</p>
          <p>comments</p>
        </div>
      </div>

      <div className="post-actions">
        <div className="btns">
          <div className="btn-container like-btn">
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

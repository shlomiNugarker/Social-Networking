import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostPreview } from './PostPreview'
import { Post } from '../models'
import { bindActionCreators } from 'redux'
import { actions } from '../store/allActions'

import { RootState } from '../store/index'

interface Props {
  posts: Post[]
}

export const PostsList: React.FC<Props> = ({ posts }) => {
  const dispatch = useDispatch()

  const { postsLength } = useSelector((state: RootState) => state.postModule)

  const { setNextPage, addPosts } = bindActionCreators(actions, dispatch)

  const onLoadPosts = () => {
    setNextPage()
    addPosts()
  }

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight + 0.9 >=
      document.documentElement.scrollHeight
    ) {
      if (posts.length === postsLength) return
      onLoadPosts()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [postsLength, posts.length])

  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}

      {(postsLength !== posts.length && (
        <div className="load-more" onClick={onLoadPosts}>
          Load more
        </div>
      )) || <div className="load-more">No more posts...</div>}
    </section>
  )
}

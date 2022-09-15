import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostPreview } from './PostPreview'
import { addPosts, setNextPage } from '../store/actions/postActions'

export function PostsList({ posts }) {
  const dispatch = useDispatch()

  const { postsLength } = useSelector((state) => state.postModule)

  const onLoadPosts = () => {
    dispatch(setNextPage())
    dispatch(addPosts())
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

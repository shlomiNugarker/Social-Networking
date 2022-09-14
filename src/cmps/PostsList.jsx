import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { utilService } from '../services/utilService'
import { addPosts, setNextPage } from '../store/actions/postActions'
import { PostPreview } from './PostPreview'

export function PostsList({ posts }) {
  const dispatch = useDispatch()
  const { postsLength } = useSelector((state) => state.postModule)

  const onLoadPosts = () => {
    if (postsLength === posts.length) {
      // console.log('no more posts')
      return
    }
    dispatch(setNextPage())
    dispatch(addPosts())
  }

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight + 0.5 >=
      document.documentElement.scrollHeight
    ) {
      dispatch(setNextPage())
      dispatch(addPosts())
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      dispatch(setNextPage(0))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}

      {postsLength !== posts.length && (
        <div className="load-more" onClick={onLoadPosts}>
          Load more
        </div>
      )}
    </section>
  )
}

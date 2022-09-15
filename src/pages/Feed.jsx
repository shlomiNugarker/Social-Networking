import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostsList } from '../cmps/PostsList'
import { setCurrPage } from '../store/actions/postActions'

export function Feed() {
  const { posts } = useSelector((state) => state.postModule)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrPage('home'))

    return () => {
      dispatch(setCurrPage(''))
    }
  }, [])

  if (!posts) return <div className="feed container">Loading...</div>
  return (
    <section className="feed container">
      <PostsList posts={posts} />
    </section>
  )
}

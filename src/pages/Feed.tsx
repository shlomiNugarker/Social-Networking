import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostsList } from '../cmps/PostsList'
import { bindActionCreators } from 'redux'
import { actions } from '../store/allActions'

import { RootState } from '../store/index'

export const Feed: React.FC = () => {
  const { posts } = useSelector((state: RootState) => state.postModule)
  const dispatch = useDispatch()

  const { setCurrPage, setNextPageToZero } = bindActionCreators(
    actions,
    dispatch
  )

  useEffect(() => {
    setCurrPage('home')
    return () => {
      setCurrPage('')
      setNextPageToZero()
    }
  }, [])

  if (!posts) return <div className="feed container">Loading...</div>
  return (
    <section className="feed container">
      <PostsList posts={posts} />
    </section>
  )
}

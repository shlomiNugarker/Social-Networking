import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Header } from '../cmps/Header'
import { Feed } from './Feed'
import { Messaging } from './Messaging'
import { Notifications } from './Notifications'
import { Profile } from './Profile'
import {
  getPostsLength,
  loadPosts,
  setNextPageToZero,
} from '../store/actions/postActions'

export function Main() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
    dispatch(getPostsLength())
    return () => {
      dispatch(setNextPageToZero())
    }
  }, [])

  return (
    <section className="main-page ">
      <Header />
      <Switch>
        <Route path="/main/feed" component={Feed} />
        <Route path="/main/profile/:userId" component={Profile} />
        <Route path="/main/messaging/:userId?" component={Messaging} />
        <Route path="/main/notifications" component={Notifications} />
      </Switch>
    </section>
  )
}

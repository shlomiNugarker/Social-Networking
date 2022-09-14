import { Route, Switch } from 'react-router-dom'
import { Header } from '../cmps/Header'
import { Feed } from './Feed'
import { Messaging } from './Messaging'
import { Notifications } from './Notifications'
import { Profile } from './Profile'

export function Main() {
  return (
    <section className="main-page">
      <h1>main-page</h1>
      <Header />
      <Switch>
        <Route path="/main/feed" component={Feed} />
        <Route path="/main/profile/:userId" component={Profile} />
        <Route path="/main/messaging/:userId" component={Messaging} />
        <Route path="/main/notifications" component={Notifications} />
      </Switch>
    </section>
  )
}

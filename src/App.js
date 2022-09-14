import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/scss/global.scss'
import { Home } from './pages/Home'
import { Main } from './pages/Main'
import { loadPosts } from './store/actions/postActions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPosts())
    return () => {}
  }, [])

  return (
    <Router>
      <div className="temp-div">
        <Link to="/home">Home</Link>|<Link to="/main/feed">feed</Link>|-
        <Link to="/main/profile/:userId">profile</Link>|-
        <Link to="/main/messaging/:userId">messaging</Link>|-
        <Link to="/main/messaging/:userId">messaging</Link>|-
        <Link to="/main/notifications">notifications</Link>|-
      </div>
      <div>
        <main className="container">
          <Switch>
            <Route path="/main" component={Main} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Main } from './pages/Main'
import './assets/scss/global.scss'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <main>
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

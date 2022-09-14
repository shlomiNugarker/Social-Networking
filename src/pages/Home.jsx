import { useHistory } from 'react-router-dom'

export function Home() {
  const history = useHistory()
  return (
    <section className="home-page">
      <h1>Dev Home Assignment</h1>
      <button
        onClick={() => {
          history.push('/main/feed')
        }}
      >
        See demo
      </button>
    </section>
  )
}

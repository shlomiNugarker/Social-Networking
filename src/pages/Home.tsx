import { useHistory } from 'react-router-dom'

export const Home: React.FC = () => {
  const history = useHistory()
  return (
    <section className="home-page">
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

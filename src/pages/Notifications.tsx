import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { setCurrPage } from '../store/actions/postActions'
import { bindActionCreators } from 'redux'
import { actions } from '../store/allActions'

export const Notifications: React.FC = () => {
  const dispatch = useDispatch()

  const { setCurrPage } = bindActionCreators(actions, dispatch)

  useEffect(() => {
    setCurrPage('notifications')

    return () => {
      setCurrPage('')
    }
  }, [])
  return (
    <section className="notifications-page">
      <h1>Notifications</h1>
    </section>
  )
}

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrPage } from '../store/actions/postActions'

export function Notifications() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrPage('notifications'))

    return () => {
      dispatch(setCurrPage(''))
    }
  }, [])
  return (
    <section className="notifications-page">
      <h1>Notifications</h1>
    </section>
  )
}

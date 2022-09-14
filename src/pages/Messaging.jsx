import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrPage } from '../store/actions/postActions'

export function Messaging() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCurrPage('messaging'))

    return () => {
      dispatch(setCurrPage(''))
    }
  }, [])

  return (
    <section className="messaging-page">
      <h1>Messaging</h1>
    </section>
  )
}

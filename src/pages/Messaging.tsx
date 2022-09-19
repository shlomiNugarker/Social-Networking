import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { bindActionCreators } from 'redux'
import { actions } from '../store/allActions'

export function Messaging() {
  const dispatch = useDispatch()

  const { setCurrPage } = bindActionCreators(actions, dispatch)

  useEffect(() => {
    setCurrPage('messaging')

    return () => {
      setCurrPage('')
    }
  }, [])

  return (
    <section className="messaging-page">
      <h1>Messaging</h1>
    </section>
  )
}

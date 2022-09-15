import { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineMessage, AiOutlineMenu } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

export function NavCmp() {
  const history = useHistory()

  const { currPage } = useSelector((state) => state.postModule)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { loggedInUser } = useSelector((state) => state.postModule)

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <section className="nav-cmp">
      <div
        className={isMenuOpen ? 'bg show-menu ' : 'bg'}
        onClick={closeMMenu}
      ></div>
      <div className="menu" onClick={openMenu}>
        <span>
          <AiOutlineMenu />
        </span>
      </div>
      <ul className={isMenuOpen ? 'show-menu ' : ''}>
        <li
          className={currPage === 'home' ? 'clicked' : ''}
          onClick={closeMMenu}
        >
          <Link to="/main/feed">
            <span>
              <AiOutlineHome />
            </span>
            <p>Home</p>
          </Link>
        </li>
        <li
          className={currPage === 'messaging' ? 'clicked' : ''}
          onClick={closeMMenu}
        >
          <Link to="/main/messaging/{:userId?}">
            <span>
              <AiOutlineMessage />
            </span>
            <p>Messaging</p>
          </Link>
        </li>
        <li
          className={currPage === 'notifications' ? 'clicked' : ''}
          onClick={closeMMenu}
        >
          <Link to="/main/notifications">
            <span>
              <IoMdNotificationsOutline />
            </span>
            <p>Notifications</p>
          </Link>
        </li>
        <li
          className="profile-img"
          onClick={() => {
            closeMMenu()
            history.push(`/main/profile/{:userId}`)
          }}
        >
          <img className="img" src={loggedInUser.avatar} alt="" />
        </li>
      </ul>
    </section>
  )
}

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function NavCmp() {
  const { currPage } = useSelector((state) => state.postModule)
  return (
    <section className="nav-cmp">
      <ul>
        <li className={currPage === 'home' ? 'clicked' : ''}>
          <Link to="/main/feed">
            <span>
              <AiOutlineHome />
            </span>
            <p>Home</p>
          </Link>
        </li>
        <li className={currPage === 'messaging' ? 'clicked' : ''}>
          <Link to="/main/messaging/:userId">
            <span>
              <AiOutlineMessage />
            </span>
            <p>Messaging</p>
          </Link>
        </li>
        <li className={currPage === 'notifications' ? 'clicked' : ''}>
          <Link to="/main/notifications">
            <span>
              <IoMdNotificationsOutline />
            </span>
            <p>Notifications</p>
          </Link>
        </li>
        <li className="profile-img">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1663011109441-6948af4a0b80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </li>
      </ul>
    </section>
  )
}

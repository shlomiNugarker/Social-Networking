import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'

export function NavCmp() {
  return (
    <section className="nav-cmp">
      <ul>
        <li className="clicked">
          <span>
            <AiOutlineHome />
          </span>
          <p>Home</p>
        </li>
        <li>
          <span>
            <AiOutlineMessage />
          </span>
          <p>Messaging</p>
        </li>
        <li>
          <span>
            <IoMdNotificationsOutline />
          </span>
          <p>Notifications</p>
        </li>
        <li className="profile-img">
          <div className="img"></div>
        </li>
      </ul>
    </section>
  )
}

import { InputCmp } from './InputCmp'
import { Logo } from './Logo'
import { NavCmp } from './NavCmp'

export const Header: React.FC = () => {
  return (
    <header className="header ">
      <div className="container">
        <div className="left">
          <Logo />
          <InputCmp></InputCmp>
        </div>
        <NavCmp></NavCmp>
      </div>
    </header>
  )
}

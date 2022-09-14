import { InputCmp } from './InputCmp'
import { Logo } from './Logo'
import { NavCmp } from './NavCmp'

export function Header() {
  return (
    <header className="header ">
      <div className="container">
        <div className="left">
          <Logo></Logo>
          <InputCmp></InputCmp>
        </div>
        <NavCmp></NavCmp>
      </div>
    </header>
  )
}

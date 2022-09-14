import { AiOutlineSearch } from 'react-icons/ai'

export function InputCmp() {
  return (
    <section className="input-cmp">
      <AiOutlineSearch className="search-icon"></AiOutlineSearch>
      <input type="text" placeholder="Search..." />
    </section>
  )
}

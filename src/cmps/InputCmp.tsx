import { AiOutlineSearch } from 'react-icons/ai'

export const InputCmp: React.FC = () => {
  return (
    <section className="input-cmp">
      <AiOutlineSearch className="search-icon"></AiOutlineSearch>
      <input type="text" placeholder="Search..." />
    </section>
  )
}

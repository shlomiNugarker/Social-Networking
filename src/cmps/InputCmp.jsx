export function InputCmp() {
  return (
    <section className="input-cmp">
      {/* <FontAwesomeIcon className="search-icon" icon="fas fa-search" /> */}
      <input
        type="text"
        placeholder="Search..."
        // onChange={handleChange}
        // onKeyDown={(e) => {
        //   if (e.code === 'Enter') onLoadPosts(e)
        // }}
        id="txt"
        name="txt"
        // value={fields.txt}
      />
    </section>
  )
}

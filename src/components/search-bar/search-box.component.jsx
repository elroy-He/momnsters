

const SearchBar = (props) => {

 return <div>
      <input
        className='Search-Box'
        type='search'
        placeholder= {props.placeholder}
        onChange={props.onChangeHandler} />
    </div>


}

export default SearchBar;
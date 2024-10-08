import s from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.searchBox}>
      <label htmlFor="search" className={s.label}>
        Find contacts by name
      </label>

      <input
        className={s.input}
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

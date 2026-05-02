import PropTypes from 'prop-types';

function SearchBar({ query, onSearch }) {
  return (
    <div style={{ margin: '16px 0' }}>
      <input
        type="text"
        placeholder="Search by name or major..."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '10px 16px',
          fontSize: '14px',
          border: '2px solid #4f46e5',
          borderRadius: '8px',
          outline: 'none',
        }}
      />
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
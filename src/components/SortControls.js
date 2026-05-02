import PropTypes from 'prop-types';

function SortControls({ sortBy, onSort }) {
  const buttonStyle = (value) => ({
    padding: '8px 16px',
    fontSize: '13px',
    border: '2px solid #4f46e5',
    borderRadius: '8px',
    cursor: 'pointer',
    background: sortBy === value ? '#4f46e5' : 'white',
    color: sortBy === value ? 'white' : '#4f46e5',
    fontWeight: '500',
  });

  return (
    <div style={{ display: 'flex', gap: '8px', margin: '16px 0' }}>
      <button style={buttonStyle('default')} onClick={() => onSort('default')}>
        Default
      </button>
      <button style={buttonStyle('name')} onClick={() => onSort('name')}>
        Name A–Z
      </button>
      <button style={buttonStyle('gpa')} onClick={() => onSort('gpa')}>
        GPA High–Low
      </button>
    </div>
  );
}

SortControls.propTypes = {
  sortBy: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default SortControls;
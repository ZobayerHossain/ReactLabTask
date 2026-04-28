import PropTypes from 'prop-types';

function StatBadge({ label, value }) {
  return (
    <div className="stat-badge">
      {label}: <span>{value}</span>
    </div>
  );
}

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StatBadge;
import PropTypes from 'prop-types';
import './Dashboard.css';

function DashboardHeader({ title, tagline, favoriteCount }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{tagline}</p>
      <p style={{ fontSize: '13px', marginTop: '4px', color: '#4f46e5' }}>
        ❤️ {favoriteCount} Favorite{favoriteCount !== 1 ? 's' : ''}
      </p>
      <nav>
        <button className="nav-link">Home</button>
        <button className="nav-link">Students</button>
        <button className="nav-link">Courses</button>
        <button className="nav-link">About</button>
      </nav>
    </div>
  );
}

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  favoriteCount: PropTypes.number.isRequired,
};

export default DashboardHeader;
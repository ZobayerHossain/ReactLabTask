import PropTypes from 'prop-types';
import './Dashboard.css';

function DashboardHeader({ title, tagline }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{tagline}</p>
      <nav>
        <a href="#">Home</a>
        <a href="#">Students</a>
        <a href="#">Courses</a>
        <a href="#">About</a>
      </nav>
    </div>
  );
}

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default DashboardHeader;
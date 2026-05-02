import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';
import { useStudents } from '../context/StudentContext';
import './Dashboard.css';

function DashboardHeader({ title, tagline }) {
  const { theme, toggleTheme } = useTheme();
  const { favoriteCount } = useStudents();

  return (
    <div className="header" style={{
      background: theme === 'dark' ? '#1e293b' : 'white',
      color: theme === 'dark' ? 'white' : '#1e293b',
      borderBottom: '1px solid #e2e8f0',
      padding: '24px',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '24px',
        border: '2px solid',
        borderColor: theme === 'dark' ? 'white' : 'black',
        display: 'inline-block',
        padding: '4px 16px',
        marginBottom: '8px',
      }}>
        {title}
      </h1>
      <p style={{ marginBottom: '4px' }}>{tagline}</p>
      <p style={{ fontSize: '13px', marginTop: '4px', color: '#4f46e5' }}>
        ❤️ {favoriteCount} Favorite{favoriteCount !== 1 ? 's' : ''}
      </p>
      <button
        onClick={toggleTheme}
        style={{
          margin: '8px 0',
          padding: '6px 16px',
          background: theme === 'dark' ? 'white' : '#1e293b',
          color: theme === 'dark' ? '#1e293b' : 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '13px',
        }}
      >
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <nav style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '8px' }}>
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
};

export default DashboardHeader;
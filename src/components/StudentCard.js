import { useState } from 'react';
import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';
import { useStudents } from '../context/StudentContext';

function StudentCard({ name, id, avatar, gpa, major, courses }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { handleFavorite, removeStudent } = useStudents();

  const toggleFavorite = () => {
    const newValue = !isFavorite;
    setIsFavorite(newValue);
    handleFavorite(newValue);
  };

  return (
    <div className="student-card" style={{
      border: isFavorite ? '2px solid #4f46e5' : '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '8px',
      background: 'white',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Dept:</strong> {major}</p>
          <div className="stat-badges">
            <StatBadge label="CGPA" value={gpa} />
            <StatBadge label="Credits" value={90} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
          <button
            onClick={toggleFavorite}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
          <button
            onClick={() => removeStudent(id)}
            style={{
              background: '#fee2e2',
              border: 'none',
              borderRadius: '6px',
              padding: '4px 10px',
              fontSize: '12px',
              color: '#ef4444',
              cursor: 'pointer',
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="courses" style={{ marginTop: '8px' }}>
        {courses.map((course, index) => (
          <CourseTag
            key={index}
            courseName={course.name}
            color={course.color}
          />
        ))}
      </div>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StudentCard;
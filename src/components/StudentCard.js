import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';

function StudentCard({ name, id, avatar, gpa, major, courses }) {
  return (
    <div className="student-card">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Dept:</strong> {major}</p>
      <div className="stat-badges">
        <StatBadge label="CGPA" value={gpa} />
        <StatBadge label="Credits" value={90} />
      </div>
      <div className="courses">
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
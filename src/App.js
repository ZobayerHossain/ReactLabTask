import './App.css';
import './components/Dashboard.css';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';

const students = [
  {
    id: '22-46081-1',
    name: 'Zobayer Hossain',
    avatar: 'Z',
    gpa: 3.18,
    major: 'CSE',
    courses: [
      { name: 'React', color: '#4f46e5' },
      { name: 'NestJS', color: '#7c3aed' },
    ],
  },
  {
    id: '22-00011-2',
    name: 'Minhaj',
    avatar: 'M',
    gpa: 3.51,
    major: 'CSE',
    courses: [
      { name: 'Python', color: '#10b981' },
      { name: 'Django', color: '#059669' },
    ],
  },
  {
    id: '22-00011-3',
    name: 'Sara Ahmed',
    avatar: 'S',
    gpa: 3.75,
    major: 'CSE',
    courses: [
      { name: 'TypeScript', color: '#0891b2' },
      { name: 'SQL', color: '#ef4444' },
    ],
  },
  {
    id: '22-00011-4',
    name: 'Rahul Islam',
    avatar: 'R',
    gpa: 3.90,
    major: 'CSE',
    courses: [
      { name: 'Machine Learning', color: '#f59e0b' },
      { name: 'Linux', color: '#64748b' },
    ],
  },
];

function App() {
  return (
    <div className="app">
      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and Track Student Progress"
      />
      <div className="dashboard">
        <h2>All Students</h2>
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              avatar={student.avatar}
              gpa={student.gpa}
              major={student.major}
              courses={student.courses}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
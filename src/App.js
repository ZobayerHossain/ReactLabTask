import { useState, useEffect } from 'react';
import './App.css';
import './components/Dashboard.css';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import Spinner from './components/Spinner';

const allStudents = [
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
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStudents(allStudents);
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    document.title = 'Dashboard — ' + getFilteredStudents().length + ' Students';
  });

  const handleFavorite = (change) => {
    setFavoriteCount((prev) => prev + (change ? 1 : -1));
  };

  const getFilteredStudents = () => {
    let result = [...students];
    if (query) {
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.major.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'gpa') {
      result.sort((a, b) => b.gpa - a.gpa);
    }
    return result;
  };

  const filteredStudents = getFilteredStudents();

  return (
    <div className="app">
      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and Track Student Progress"
        favoriteCount={favoriteCount}
      />
      <div className="dashboard">
        <h2>All Students</h2>
        <SearchBar query={query} onSearch={setQuery} />
        <SortControls sortBy={sortBy} onSort={setSortBy} />
        {loading ? (
          <Spinner />
        ) : filteredStudents.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#64748b', marginTop: '32px' }}>
            No students found.
          </p>
        ) : (
          <div className="student-grid">
            {filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                avatar={student.avatar}
                gpa={student.gpa}
                major={student.major}
                courses={student.courses}
                onFavorite={handleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
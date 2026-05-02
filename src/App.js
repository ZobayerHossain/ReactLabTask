import { useEffect } from 'react';
import './App.css';
import './components/Dashboard.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { StudentProvider, useStudents } from './context/StudentContext';
import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import Spinner from './components/Spinner';
import AddStudentForm from './components/AddStudentForm';

function Dashboard() {
  const { theme } = useTheme();
  const { students, query, setQuery, sortBy, setSortBy } = useStudents();

  useEffect(() => {
    document.title = 'Dashboard — ' + students.length + ' Students';
  }, [students]);

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
    <div className="app" style={{
      background: theme === 'dark' ? '#0f172a' : '#f8fafc',
      minHeight: '100vh',
      color: theme === 'dark' ? 'white' : '#1e293b',
    }}>
      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and Track Student Progress"
      />
      <div className="dashboard">
        <h2>All Students</h2>
        <AddStudentForm />
        <SearchBar query={query} onSearch={setQuery} />
        <SortControls sortBy={sortBy} onSort={setSortBy} />

        {filteredStudents.length === 0 ? (
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
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <StudentProvider>
        <Dashboard />
      </StudentProvider>
    </ThemeProvider>
  );
}

export default App;
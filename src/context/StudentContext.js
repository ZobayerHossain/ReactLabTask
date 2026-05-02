import { createContext, useContext, useState, useEffect } from 'react';

const StudentContext = createContext();

const initialStudents = [
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

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students');
    return saved ? JSON.parse(saved) : initialStudents;
  });
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const handleFavorite = (change) => {
    setFavoriteCount((prev) => prev + (change ? 1 : -1));
  };

  return (
    <StudentContext.Provider value={{
      students,
      query,
      setQuery,
      sortBy,
      setSortBy,
      favoriteCount,
      handleFavorite,
      addStudent,
      removeStudent,
    }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}
import { useState, useEffect } from 'react';
import { useStudents } from '../context/StudentContext';

function AddStudentForm() {
  const { addStudent, students } = useStudents();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    id: '',
    major: '',
    gpa: '',
    courses: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.id.trim()) newErrors.id = 'Student ID is required';
    else if (!/^\d/.test(form.id)) newErrors.id = 'ID must start with a number';
    else if (students.find((s) => s.id === form.id)) newErrors.id = 'ID must be unique';
    if (!form.major.trim()) newErrors.major = 'Major is required';
    if (!form.gpa) newErrors.gpa = 'GPA is required';
    else if (parseFloat(form.gpa) < 0 || parseFloat(form.gpa) > 4.0)
      newErrors.gpa = 'GPA must be between 0 and 4.0';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const courseList = form.courses
      .split(',')
      .map((c) => c.trim())
      .filter((c) => c)
      .map((c) => ({ name: c, color: '#4f46e5' }));

    addStudent({
      id: form.id,
      name: form.name,
      avatar: form.name[0].toUpperCase(),
      gpa: parseFloat(form.gpa),
      major: form.major,
      courses: courseList,
    });

    setForm({ name: '', id: '', major: '', gpa: '', courses: '' });
    setErrors({});
    setShowSuccess(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    fontSize: '14px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    marginBottom: '4px',
    outline: 'none',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginBottom: '8px',
  };

  return (
    <div style={{
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '24px',
    }}>
      <h3 style={{ marginBottom: '16px', fontSize: '16px' }}>Add New Student</h3>

      {showSuccess && (
        <div style={{
          background: '#d1fae5',
          color: '#065f46',
          padding: '10px 16px',
          borderRadius: '8px',
          marginBottom: '16px',
          fontSize: '14px',
        }}>
          Student added successfully!
        </div>
      )}

      <input
        style={inputStyle}
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p style={errorStyle}>{errors.name}</p>}

      <input
        style={inputStyle}
        name="id"
        placeholder="Student ID"
        value={form.id}
        onChange={handleChange}
      />
      {errors.id && <p style={errorStyle}>{errors.id}</p>}

      <input
        style={inputStyle}
        name="major"
        placeholder="Major"
        value={form.major}
        onChange={handleChange}
      />
      {errors.major && <p style={errorStyle}>{errors.major}</p>}

      <input
        style={inputStyle}
        name="gpa"
        placeholder="GPA (0 - 4.0)"
        value={form.gpa}
        onChange={handleChange}
      />
      {errors.gpa && <p style={errorStyle}>{errors.gpa}</p>}

      <input
        style={inputStyle}
        name="courses"
        placeholder="Courses (comma separated e.g. React, NestJS)"
        value={form.courses}
        onChange={handleChange}
      />

      <button
        onClick={handleSubmit}
        style={{
          marginTop: '8px',
          padding: '10px 20px',
          background: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Add Student
      </button>
    </div>
  );
}

export default AddStudentForm;
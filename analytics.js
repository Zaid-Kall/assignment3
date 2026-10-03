export function calculateClassAverage(students, courseId) {
  const grades = students.flatMap(s => s.courses.filter(c => c.courseId === courseId));
  if (grades.length === 0) return 0;
  const sum = grades.reduce((acc, c) => acc + c.grade, 0);
  return Number((sum / grades.length).toFixed(2));
}

export function findTopStudent(students) {
  if (students.length === 0) return null;
  return students.reduce((top, s) => s.getAverage() > top.getAverage() ? s : top);
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
import { Student } from './models.js';
import { fetchStudents } from './database.js';
import { calculateClassAverage, findTopStudent, filterStudents } from './analytics.js';

fetchStudents((rawData) => {
  const students = rawData.map(d => new Student(d.id, d.name, d.courses));

  console.log("\nTesting Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");
  
  try {
    students[0].id = 999;
  } catch (e) {}
  
  console.log(`Final ID: ${students[0].id} (Success: ID did not change)`);

  console.log("\n--- Analytics Report ---");
  console.log(`Class Average for Course 101: ${calculateClassAverage(students, 101)}`);
  
  const top = findTopStudent(students);
  console.log(`Top Student: ${top.name} (Average: ${top.getAverage()})`);

  const filtered = filterStudents(students, s => s.courses.some(c => c.courseId === 102));
  console.log(`Students in Course 102: ${filtered.map(s => s.name).join(", ")}`);
});
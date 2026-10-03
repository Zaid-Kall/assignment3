export class Student {
  constructor(id, name, courses = []) {
    this.name = name;
    this.courses = courses;

    Object.defineProperty(this, 'id', {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }

  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  getAverage() {
    if (this.courses.length === 0) return 0;
    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return total / this.courses.length;
  }
}
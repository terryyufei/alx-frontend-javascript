export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify type during object creation
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid attribute type');
    }

    // private attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = value;
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Students must be an array');
    }
    this._students = value;
  }
}

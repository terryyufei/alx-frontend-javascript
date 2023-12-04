export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((student) => student.location === city);
}

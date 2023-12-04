export default function getStudentIdsSum(studentList) {
  const sumOfIds = studentList.reduce((acc, student) => acc + student.id, 0);
  return sumOfIds;
}

const StudentView = (props) => {
  const { student } = props;
  let temp = "Campus unassigned.";
  if(student.campus != null) {
    temp = student.campus.name;
  }
  return (
    <div>
      <img src={student.imageUrl} width="200" height ="200"></img>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h2>Email: {student.email}</h2>
      <h2>GPA: {student.gpa}</h2>
      <h3>Campus: {temp}</h3>
    </div>
  );

};

export default StudentView;
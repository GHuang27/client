const StudentView = (props) => {
  const { student } = props;
  let temp = "Campus unassigned.";
  if(student.campus != null) {
    temp = student.campus.name;
  }
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>{temp}</h3>
    </div>
  );

};

export default StudentView;
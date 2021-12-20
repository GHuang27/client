import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';

const StudentView = (props) => {
  const { student, deleteStudent, handleChange, handleSubmit } = props;
  const [redir, setRedir] = useState(false);
  let temp = "Campus unassigned.";
  let tid = null;
  if(student.campus != null) {
    temp = student.campus.name;
    tid = student.campus.id;
  }
  async function handleDelete(cid) {
    await deleteStudent(cid);
    setRedir(true);
  }

  return (
    <>
      {redir ? <Redirect to="/students" /> : null}
      <div>
        <img src={student.imageUrl} alt="Student" width="200" height ="200"></img>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h2>Email: {student.email}</h2>
        <h2>GPA: {student.gpa}</h2>
        <h3>Campus: 
          <Link to={`/campus/${tid}`}>
            {temp}
          </Link>
        </h3>
        <button onClick={() => handleDelete(student.id)}>Delete Student</button>

        <h2 style={{textAlign: 'center'}}>
          Edit Student Information
        </h2>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
          <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>email: </label>
          <input type="text" name="email" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Avatar: </label>
          <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
          <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
          <input type="text" name="gpa" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>

  );

};

export default StudentView;
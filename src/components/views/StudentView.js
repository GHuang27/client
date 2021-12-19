import React from 'react';
import Button from '@material-ui/core/Button';

const StudentView = (props) => {
  const { student, handleChange, handleSubmit } = props;
  let temp = "Campus unassigned.";
  if(student.campus != null) {
    temp = student.campus.name;
  }

  return (
    <div>
      <img src={student.imageUrl} alt="Student" width="200" height ="200"></img>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h2>Email: {student.email}</h2>
      <h2>GPA: {student.gpa}</h2>
      <h3>Campus: {temp}</h3>

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
    

  );

};

export default StudentView;
import React, {useState, Component} from 'react';
import Button from '@material-ui/core/Button';

const StudentView = (props) => {
  const { student, editStudent } = props;
  let temp = "Campus unassigned.";
  let SID = student.id;
  if(student.campus != null) {
    temp = student.campus.name;
  }
  
  const [firstname, updateFName] = useState('');
  const [lastname, updateLName] = useState('');
  const [email, updateEmail] = useState('');
  const [imageUrl, updateImg] = useState('');
  const [campusId, updateCampusId] = useState('');
  const [gpa, updateGPA] = useState('');
  
  const handleSubmit = async event => {
    event.preventDefault();
    console.log("Submitted");
    
    let temp = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        campusId: campusId,
        gpa: gpa,
        imageUrl: imageUrl
    };
    console.log(temp);
    console.log(student);
    console.log(SID);
    //this.props.editStudent(SID, temp);
    /*
    this.setState({
      firstname: "", 
      lastname: "", 
      email: "",
      imageUrl: "",
      campusId: null, 
      gpa: null,
      redirect: true, 
      redirectId: newStudent.id
    });
    */
  }

  return (
    <div>
      <img src={student.imageUrl} width="200" height ="200"></img>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h2>Email: {student.email}</h2>
      <h2>GPA: {student.gpa}</h2>
      <h3>Campus: {temp}</h3>

      <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
        <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
        <input type="text" name="firstname" onChange ={(e) => updateFName(e.target.value)} />
        <br/>
        <br/>

        <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
        <input type="text" name="lastname" onChange={(e) => updateLName(e.target.value)} />
        <br/>
        <br/>

        <label style={{color:'#11153e', fontWeight: 'bold'}}>email: </label>
        <input type="text" name="email" onChange={(e) => updateEmail(e.target.value)} />
        <br/>
        <br/>

        <label style={{color:'#11153e', fontWeight: 'bold'}}>Avatar: </label>
        <input type="text" name="imageUrl" onChange={(e) => updateImg(e.target.value)} />
        <br/>
        <br/>

        <label style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
        <input type="text" name="campusId" onChange={(e) => updateCampusId(e.target.value)} />
        <br/>
        <br/>

        <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
        <input type="text" name="gpa" onChange={(e) => updateGPA(e.target.value)} />
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
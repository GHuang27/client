import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const CampusView = (props) => {
  const {campus, editStudent, deleteCampus, handleChange, handleSubmit} = props;
  console.log("Outputting students");
  console.log(campus.students[0]);
  function handleDelete(cid) {
    for(let i=0; i<campus.students.length; i++) {
      let temp = {
        firstname: campus.students[i].firstname,
        lastname: campus.students[i].lastname,
        email: campus.students[i].email,
        campusId: null,
        gpa: campus.students[i].gpa,
        imageUrl: campus.students[i].imageUrl,
        id: campus.students[i].id
      };
      editStudent(temp);
    }
    deleteCampus(cid);
  }
  
  return (
    <div>
      <img src={campus.imageUrl} alt="Pic" width="200" height="200"></img>
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <p>{campus.description}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>
              {name}
            </Link>
          </li>
        );
      })}
      </ul>
      <button onClick={() => handleDelete(campus.id)}>Delete Campus</button>
      <h2 style={{textAlign: 'center'}}>
        Edit Campus Information
      </h2>
      <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
        <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
        <input type="text" name="campusName" onChange ={(e) => handleChange(e)} />
        <br/>
        <br/>

        <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
        <input type="text" name="address" onChange={(e) => handleChange(e)} />
        <br/>
        <br/>

        <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
        <input type="text" name="description" onChange={(e) => handleChange(e)} />
        <br/>
        <br/>

        <label style={{color:'#11153e', fontWeight: 'bold'}}>ImageUrl: </label>
        <input type="text" name="imageUrl" onChange={(e) => handleChange(e)} />
        <br/>
        <br/>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );

};

export default CampusView;
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const CampusView = (props) => {
  const {campus, handleChange, handleSubmit} = props;
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
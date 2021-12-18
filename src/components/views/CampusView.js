import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>
      <img src={campus.imageUrl} width="200" height="200"></img>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h1>{name}</h1>
            </Link>
          </li>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;
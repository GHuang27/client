import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students} = props;

  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`student/new`}>
        <button>Add New Student</button>
      </Link>
      <Link to={`/campuses`}>
        <button>Campuses</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h1>{name}</h1>
            </Link>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
      <Link to={`/campuses`}>
        <button>Campuses</button>
      </Link>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </div>
  );
};


export default AllStudentsView;
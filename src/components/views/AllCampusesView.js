import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//AllCampusesView.js
const AllCampusesView = (props) => {
  const {deleteCampus, editStudent} = props;

  async function handleDelete(cid, campus) {
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
    await deleteCampus(cid);
  }

  if (!props.allCampuses.length) {
    return (
      <div>
        <p>There are no campuses.</p>
        <Link to={`/newcampus`}>
          <button>Add New Campus</button>
        </Link>
        <Link to={`/students`}>
          <button>Students</button>
        </Link>
        <Link to={`/`}>
          <button>Home</button>
        </Link>
        </div>
    );
  }
  
  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}> 
          <Link to={`/campuses/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
          <button onClick={() => handleDelete(campus.id, campus)}>Delete</button>
        </div>
      ))}
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <Link to={`/students`}>
        <button>Students</button>
      </Link>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
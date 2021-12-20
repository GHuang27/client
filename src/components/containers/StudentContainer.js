import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";
import { Redirect } from 'react-router-dom';

class StudentContainer extends Component {
  state = {
    redirect: false
  }
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
      event.preventDefault();
      
      let temp = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          campusId: this.state.campusId,
          gpa: this.state.gpa,
          imageUrl: this.state.imageUrl,
          id: this.props.match.params.id
      };
      await this.props.editStudent(temp);
      this.setState({redirect: true});
  }
  
  render() {
    if(this.state.redirect) {
      return (<Redirect to='/students' />);
    };
    return (
      <StudentView 
        student={this.props.student}
        handleChange = {this.handleChange} 
        handleSubmit={this.handleSubmit}  
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
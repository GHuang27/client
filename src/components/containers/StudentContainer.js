import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
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
      console.log(this.props.student.firstname);
      let tfn = this.props.student.firstname;
      let tln = this.props.student.lastname;
      let tem = this.props.student.email;
      let tci = this.props.student.campusId;
      let tga = this.props.student.gpa;
      let tiu = this.props.student.imageUrl;
      let tid = this.props.student.id;
      if(this.state.firstname) {
        tfn = this.state.firstname;
      };
      if(this.state.lastname) {
        tln = this.state.lastname;
      };
      if(this.state.email) {
        tem = this.state.email;
      };
      if(this.state.campusId) {
        tci = this.state.campusId;
      };
      if(this.state.gpa) {
        tga = this.state.gpa;
      };
      if(this.state.imageUrl) {
        tiu = this.state.imageUrl;
      };
      if(this.state.imageUrl) {
        tid = this.state.imageUrl;
      };
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
  }
  
  render() {
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
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCampus } from "../../store/actions/actionCreators";
import { 
  fetchCampusThunk, 
  editCampusThunk,
  deleteCampusThunk,
  editStudentThunk } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
      event.preventDefault();
      console.log(this.props.campus.students);
      let tName = this.props.campus.name;
      let tAddress = this.props.campus.address;
      let tDescription = this.props.campus.description;
      let tImageUrl = this.props.campus.imageUrl;
      if(this.state.campusName) {
        tName = this.state.campusName;
      };
      if(this.state.address) {
        tAddress = this.state.address;
      };
      if(this.state.description) {
        tDescription = this.state.description;
      };
      if(this.state.imageUrl) {
        tImageUrl = this.state.imageUrl;
      };
      let temp = {
          name: tName,
          address: tAddress,
          description: tDescription,
          imageUrl: tImageUrl,
          id: this.props.match.params.id
      };
      await this.props.editCampus(temp);
  }
  /*
  handleDelete() {
    for(let i=0; i<this.props.campus.students.length; i++) {
      let temp = {
        firstname: this.props.campus.students[i].firstname,
        lastname: this.props.campus.students[i].lastname,
        email: this.props.campus.students[i].email,
        campusId: this.props.campus.students[i].campusId,
        gpa: this.props.campus.students[i].gpa,
        imageUrl: this.props.campus.students[i].imageUrl,
        id: this.props.props.campus.students[i].id
      };
      this.props.editStudent(temp);
    }
    deleteCampus(this.props.campus.campusId);
  }
  */
  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        deleteCampus={this.props.deleteCampus}
        editStudent={this.props.editStudent}
        handleChange = {this.handleChange} 
        handleSubmit = {this.handleSubmit}
        //handleDelete = {this.handleDelete}  
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
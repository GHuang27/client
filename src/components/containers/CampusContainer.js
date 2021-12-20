import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { 
  fetchCampusThunk, 
  editCampusThunk,
  deleteCampusThunk,
  editStudentThunk } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  state = {
    redirect: false
  }
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
    console.log("Is it here");
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
      event.preventDefault();
      let temp = {
          name: this.state.campusName,
          address: this.state.address,
          description: this.state.description,
          imageUrl: this.state.imageUrl,
          id: this.props.match.params.id
      };
      await this.props.editCampus(temp);
      this.setState({redirect: true});
  }
  
  render() {
    if(this.state.redirect) {
      return (<Redirect to='/campuses' />);
    };
    return (
      <CampusView 
        campus={this.props.campus}
        deleteCampus={this.props.deleteCampus}
        editStudent={this.props.editStudent}
        handleChange = {this.handleChange} 
        handleSubmit = {this.handleSubmit}
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
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";

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

      let temp = {
          name: this.state.campusName,
          address: this.state.address,
          description: this.state.description,
          imageUrl: this.state.imageUrl,
          id: this.props.match.params.id
      };
      await this.props.editCampus(temp);
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        handleChange = {this.handleChange} 
        handleSubmit={this.handleSubmit}  
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
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
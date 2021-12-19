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
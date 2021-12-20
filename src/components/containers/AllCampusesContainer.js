import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
  fetchAllCampusesThunk,
  deleteCampusThunk,
  editStudentThunk } from "../../store/thunks";

import { AllCampusesView } from "../views";


class AllCampusesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        deleteCampus={this.props.deleteCampus}
        editStudent={this.props.editStudent}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

function mapDispatch (dispatch) {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
  }; 
}

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);
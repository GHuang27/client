import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';


class NewStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "", 
          email: "",
          imageUrl: "",
          campusId: null, 
          gpa: null,
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
      event.preventDefault();
      let defaultI = "https://www.artworksprojects.org/wp-content/uploads/2020/06/Silhouette-Portrait-Male-520-x-576.png";
      let defaultC = null;
      if(this.state.imageUrl) {
        defaultI = this.state.imageUrl;
      };
      if(this.state.campusId) {
        defaultC = this.state.campusId;
      };
      let student = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          campusId: defaultC,
          gpa: this.state.gpa,
          imageUrl: defaultI
      };
      
      let newStudent = await this.props.addStudent(student);

      this.setState({
        firstname: "", 
        lastname: "", 
        email: "",
        imageUrl: "",
        campusId: null, 
        gpa: null,
        redirect: true, 
        redirectId: newStudent.id
      });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
          <NewStudentView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

export default connect(null, mapDispatch)(NewStudentContainer);
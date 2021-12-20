import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';


class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "", 
          address: "", 
          description: "",
          imageUrl: "",
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
        let defaultImage = "https://previews.123rf.com/images/mikegreen/mikegreen1609/mikegreen160900089/67292768-school-building-icon-silhouette-vector-illustration.jpg"
        if(this.state.imageUrl) {
          defaultImage = this.state.imageUrl;
        };
        let temp = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            imageUrl: defaultImage
        };
        
        let newCampus = await this.props.addCampus(temp);

        this.setState({
          name: "", 
          address: "", 
          description: "",
          imageUrl: "",
          redirect: true, 
          redirectId: newCampus.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      console.log("Again");
      if(this.state.redirect) {
        return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
      }
      return (
        <NewCampusView 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}      
        />
      );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);

import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api';
import AllBoxes from '../AllBoxes/index';

export default class Main extends Component {
    state = {
      newBox: '',
      allBoxes: '',
    };

    async componentDidMount() {
      const response = await api.get('allboxes');
      this.setState({ allBoxes: response.data });
    }

    handleSubmit = async (event) => {
      event.preventDefault();

      const response = await api.post('boxes', {
        title: this.state.newBox,
      });
      
      this.props.history.push(`/box/${response.data._id}`);
    }

    handleInputChange = (event) => {
      this.setState({ newBox: event.target.value });
    }

    render() {
      return (
        <div>
          <div id="main-container">
            <form onSubmit={this.handleSubmit}>
              <i className="fab fa-dropbox fa-4x">CloneBox</i>
              <input
                placeholder="Create a box"
                value={this.state.newBox}
                onChange={this.handleInputChange}
              />
              <button type="submit">Create</button>
            </form>
          </div>
          <div>
            <AllBoxes boxes={this.state.allBoxes} />
          </div>
        </div>
      );
    }
}

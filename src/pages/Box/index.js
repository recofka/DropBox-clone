import React, { Component } from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import { distanceInWords } from 'date-fns';
import './styles.css';
import api from '../../services/api';

export default class Box extends Component {
  state = {
    box: {}
  }


  async componentDidMount() {
    const box = this.props.match.params.id;
    const response = await api.get(`boxes/${box}`);
    this.setState({ box: response.data })
    console.log('response', response)
  }


  render() {
    if (this.state.box.files === undefined){
      return <h1 id='box-loading'>Loading</h1>
    }
    
    return (
      <div id='box-container'>
        <header>
          <i className="fab fa-dropbox fa-4x">CloneBox</i>
          <h1>{this.state.box.title}</h1>
        </header>
        <ul>
       
          {this.state.box.files && this.state.box.files.map(file => (
            <li key={file._id}>
              <a className='fileInfo' href={file.url} target='blank'>
                <MdInsertDriveFile size={24} color='#5c1f99' />
                <strong>{file.title}</strong>
              </a>
              <span>{distanceInWords(file.createdAt, new Date())} ago</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

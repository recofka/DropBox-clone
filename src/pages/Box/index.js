import React, { Component } from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import './styles.css';
import api from '../../services/api';

export default class Box extends Component {
  state={
    box: {}
  }


  async componentDidMount(){
    const box = this.props.match.params.id;
    const response = await api.get(`boxes/${box}`);
    this.setState({ box: response.data})
    console.log('response',response)
  }


  render() {
    return (
      <div id='box-container'>
        <header>
          <i className="fab fa-dropbox fa-4x">CloneBox</i>
          <h1>{this.state.box.title}</h1>
        </header>
        <ul>
          <li>
            <a className='fileInfo' href='oi'>
            <MdInsertDriveFile size={24} color='#5c1f99' />
            <strong>Nome do arquivo</strong>
            </a>
            <span>Ha 3 minutos atras</span>
          </li>
          <li>
            <a className='fileInfo' href='oi'>
            <MdInsertDriveFile size={24} color='#5c1f99' />
            <strong>Nome do arquivo2</strong>
            </a>
            <span>Ha 3 minutos atras</span>
          </li>
        </ul>
      </div>
    );
  }
}

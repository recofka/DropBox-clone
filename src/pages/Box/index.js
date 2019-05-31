import React, { Component } from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import { distanceInWords } from 'date-fns';
import Dropzone from 'react-dropzone';
import socket from 'socket.io-client';
import './styles.css';
import api from '../../services/api';

export default class Box extends Component {
  state = {
    box: {},
  }

  async componentDidMount() {
    // "subscribe" at socket.io
    this.subscribeToNewFiles();

    // Post files in the API
    const box = this.props.match.params.id;
    const response = await api.get(`boxes/${box}`);
    this.setState({ box: response.data });
  }

  handleUpload = (files) => {
    files.forEach((element) => {
      const data = new FormData();
      const box = this.props.match.params.id;

      data.append('file', element);
      api.post(`boxes/${box}/file`, data);
    });
  }

  subscribeToNewFiles = () => {
    const box = this.props.match.params.id;
    const io = socket('https://drop-b-api.herokuapp.com');

    io.emit('connectRoom', box);

    io.on('file', (data) => {
      this.setState({ box: { ...this.state.box, files: [data, ...this.state.box.files] } });
    });
  }

  render() {
    const { title, files } = this.state.box;
    if (files === undefined) {
      return (<h1 id="box-loading-boxes">Loading...</h1>);
    }

    return (
      <div id="box-container">
        <header>
          <a href='/'>
          <i className="fab fa-dropbox fa-4x">CloneBox</i>
          </a>
          <h1>{title}</h1>
        </header>

        <Dropzone onDropAccepted={this.handleUpload}>
          {({ getRootProps, getInputProps }) => (
            <div className="upload" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drop to upload your files or choose your files</p>
            </div>
          )}
        </Dropzone>

        <ul>
          {files && files.map(file => 

            <li key={file._id}>
              <a className="fileInfo" href={`https://drop-b-api.herokuapp.com/files/${file.path}`} target="parent">
                <MdInsertDriveFile size={24} color="#7159c1" />
                <strong>{file.title}</strong>
              </a>
              <span>
                {distanceInWords(file.createdAt, new Date())}
                {' '}
                ago
              </span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

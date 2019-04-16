import React, { Component } from 'react';
import './styles.css';
import logo from '../../assets/logo.svg'

export default class Main extends Component {
    render() {
        return (
            <div id='main-container'>
                <form>
                    <i class="fab fa-dropbox fa-4x">CloneBox</i>
                    <input placeholder='Create a box'/>
                    <button type='submit'>Create</button>

                </form>

            </div>
        );
    }
}

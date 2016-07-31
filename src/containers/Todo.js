/**
 * Created by imdkva on 25.07.16.
 */

import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return (
      <div>
        <h1>Hello, Todo!</h1>
        <ul>
          <li>Default index route</li>
          <li>Connect container to redux</li>
          <li>Think about example case</li>
          <li>Take normalize.css from node_modules by webpack, not with import in index.js</li>
        </ul>
      </div>);
  }

}

export default Todo;
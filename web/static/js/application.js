//Entry point for the ReactJS Portion of the Application
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './user/index.js';

const tag = document.getElementById("user-content");

ReactDOM.render(<Root />, tag);

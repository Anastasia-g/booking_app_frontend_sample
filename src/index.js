import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
//import App from './App';
import * as serviceWorker from './serviceWorker';
import guidedTours from './guidedTours';
import AllGuides from './AllGuides';
import AddGuide from './AddGuide';
import EditGuide from './EditGuide';


import { BrowserRouter,  Route } from 'react-router-dom';

  ReactDOM.render((
    <BrowserRouter>
      
      <Route exact path="/" component={AllGuides} />
      <Route exact path="/booking" component={guidedTours} />
      <Route exact path="/guides/add" component={AddGuide} />
      <Route exact path="/guides/edit/:id" component={EditGuide} />

      </BrowserRouter>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';
import * as serviceWorker from './serviceWorker';
// import AddTourInquiry from './AddTourInquiry';
// import AllGuides from './AllGuides';
// import AddGuide from './AddGuide';
// import EditGuide from './EditGuide';
// import GuideProfile from './GuideProfile';
// import AllTourInquiries from './AllTourInquiries';
// import TourInquiry from './TourInquiry';
// import RequestPayment from './RequestPayment';
// import Pay from './Pay';
// import AllPayments from './AllPayments';
// import Process from './Process';
// import Cancel from './Cancel';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';

ReactDOM.render(
 /*  <BrowserRouter>
    
      <Switch>

        < Route exact path="/" component={AllGuides} />
        <Route exact path="/guides/add" component={AddGuide} />
        <Route exact path="/guides/edit/:id" component={EditGuide} />
        <Route exact path="/guides/:id" component={GuideProfile} />
        
        <Route exact path = "/tourInquiries" component={AllTourInquiries} /> 
        <Route exact path="/booking" component={AddTourInquiry} />
        <Route exact path="/tourInquiries/:id" component={TourInquiry} />
        <Route exact path="/paymentrequest/:id" component={RequestPayment} />
        <Route exact path="/payments" component={AllPayments} />
        <Route exact path="/payments/:id" component={Pay} />
        <Route exact path = "/process" component={Process} /> 
        <Route exact path = "/cancel" component={Cancel} /> 
      </Switch>
   
  </BrowserRouter>) */ <App/>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

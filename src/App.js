import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { withOktaAuth } from '@okta/okta-react';
import Api from './Api';
import NavBar from "./NavBar";
import Home from "./Home";
import AllGuides from './AllGuides';
import AddGuide from './AddGuide';
import EditGuide from './EditGuide';
import AllTourInquiries from './AllTourInquiries';
import EditTourInquiry from './EditTourInquiry';
import AddTourInquiry from './AddTourInquiry';
import AllPayments from './AllPayments';
import RequestPayment from './RequestPayment';
import AllPaymentRequests from './AllPaymentRequests';
import Pay from './Pay';
import Process from './Process';
import Cancel from './Cancel';
import Success from './Success';

const AuthWrapper = withOktaAuth(class WrappedRoutes extends Component {

  constructor(props) {
    super(props);
    this.state = { authenticated: null, user: null, api: new Api() };
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.authState.isAuthenticated;
    if (authenticated !== this.state.authenticated) {
      if (authenticated) {
        const user = await this.props.authService.getUser();
        let accessToken = await this.props.authService.getAccessToken();
        this.setState({ authenticated, user, api: new Api(accessToken) });
      }
      else {
        this.setState({ authenticated, user:null, api: new Api() });
      }
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    if (this.state.authenticated === null) return; // do nothing if auth isn't loaded yet
    this.props.authService.login('/');
  }

  async logout() {
    this.props.authService.logout('/');
  }

  render() {
    let {authenticated, user, api} = this.state;

    if (authenticated === null) {
      return null;
    }

    const navbar = <NavBar
      isAuthenticated={authenticated}
      login={this.login.bind(this)}
      logout={this.logout.bind(this)}
    />;
    

    return (
      
      <Switch>
        <SecureRoute
          path='/'
          exact={true}
          render={(props) => <Home {...props}  login={this.login.bind(this)} authenticated={authenticated} user={user} api={api} navbar={navbar} />}
        />
        <SecureRoute
          path='/guides'
          exact={true}
          render={(props) => <AllGuides {...props}  authenticated={authenticated} user={user} api={api} navbar={navbar}/>}
        />
         <SecureRoute
          path='/guides/add'
          exact={true}
          render={(props) => <AddGuide {...props}  authenticated={authenticated} user={user} api={api} navbar={navbar}/>}
        />       
        <SecureRoute
          path='/guides/edit/:id'
          render={(props) => <EditGuide {...props} authenticated={authenticated} user={user} api={api} navbar={navbar}/>}
        />
        <SecureRoute
          path='/tour-inquiries'
          exact={true}
          render={(props) => <AllTourInquiries{...props}  authenticated={authenticated} user={user} api={api} navbar={navbar}/>}
        />
        <Route
          path='/booking'
          exact={true}
          render={(props) => <AddTourInquiry{...props}  authenticated={authenticated} user={user} api={api} navbar={navbar}/>}
        />
        <Route
          path='/success'
          exact={true}
          render={(props) => <Success{...props}  authenticated={authenticated} user={user} api={api} navbar={navbar}/>}
        />
        <SecureRoute
          path='/tour-inquiries/edit/:id'
          exact={true}
          render={(props) => <EditTourInquiry{...props}  authenticated={authenticated} user={user} api={api} navbar={navbar}/>}
        />
  
        {/* <SecureRoute
          path='/payments'
          exact={true}
          render={(props) => <AllPayments {...props}  authenticated={authenticated} user={user} api={api} navbar={navbar}/>}
        />
        <SecureRoute
          path='/paymentRequests'
          exact={true}
          render={(props) => <AllPaymentRequests {...props} authenticated={authenticated} user={user} api={api} navbar={navbar}/>}
        /> */}
        <SecureRoute
          path='/payment-requests/:id'
          exact={true}
          render={(props) => <RequestPayment {...props} authenticated={authenticated} user={user} api={api}/>}
        />
        <Route
          path='/payments/:inquiryId'
          exact={true}
          render={(props) => <Pay {...props} api={api}/>}
        />
        <Route
          path='/process'
          exact={true}
          render={(props) => <Process {...props} />}
        />
        <Route
          path='/cancel'
          exact={true}
          render={(props) => <Cancel {...props} />}
        />

      </Switch>
    )
  }
});

class App extends Component {

  render() {
    return (
      <Router>
        <Security issuer='https://dev-251206.okta.com/oauth2/default'
              clientId='0oacoppebPrx3gdYG4x6'
              redirectUri={window.location.origin + '/callback'}
              pkce={true}>
          <Route path='/callback' component={LoginCallback} />
          <AuthWrapper />
        </Security>
      </Router>
    )
  }
}

export default App;

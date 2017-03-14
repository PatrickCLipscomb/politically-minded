import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp, getCampaignDataThunk } from './state/reducers/app';
import logo from './logo.svg';
import './App.css';


// this component is being mapped to the root route in the routes file
class App extends Component {
  componentWillMount() {
    this.props.getCampaignData(this.props.params.filerId);
  }
  componentDidMount() {
    debugger;
    this.props.initApp();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React-redux data viz</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(
  state => ({
    inFlight: state.app.fetching,
    data: state.app.data,
  }),
  dispatch => ({
  initApp: () => dispatch(initializeApp()),
  getCampaignData: (id) => dispatch(getCampaignDataThunk(id))
})
)(App);

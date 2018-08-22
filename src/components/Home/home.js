// import { React, Component } from 'react';
import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/action';

class Home extends Component {

    simpleAction(event){
      this.props.simpleAction();
     }
  
     componentWillMount() {
      console.log("hi",this.props)
      this.props.history.push('/landing-page')
    }
    
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={(e) => this.simpleAction(e)}>Test redux action</button>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    ...state
   })
  
   const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
   })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  
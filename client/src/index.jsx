import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Dashboard from './components/Dashboard.jsx';
// import AddTodo from './components/AddTodo.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="container-fluid">
        <Dashboard />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Dashboard from './components/Dashboard.jsx';
// import AddTodo from './components/AddTodo.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entries: []
    };
  }

  submitEntry(username, sleepHrs, exerciseMins, moodLevel) {
    var obj = {username: username, sleepHrs: sleepHrs, exerciseMins: exerciseMins, moodLevel: moodLevel}
    $.ajax({
      type: 'POST',
      url: '/users',
      contentType: 'application/json',
      data: JSON.stringify(obj),
      success: function () {
        console.log('successful POST')
      },
      error: function (err) {
        console.log('We\'re experiencing an error during the POST request: ', err)
      }
    })
  }

  componentDidRender () {
    $.ajax({
      type: 'GET',
      url: '/',
      contentType: 'application/json',
      success: function (data) {
        console.log('successful GET');
        this.setState({
          entries: data
        })
      },
      error: function (err) {
        console.log('We\'re experiencing an error during the GET request: ', err)
      }
    })
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
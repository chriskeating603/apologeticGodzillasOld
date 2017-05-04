import React from 'react';
import $ from 'jquery';

class CategoryList extends React.Component {
  constructor(props) {
    super (props);
    this.state = { 
      name: '',
      mind: '',
      body: '',
      soul: ''
    };
  }

  add (state) {  // CREATE
    console.log(`${state.name} was added`);
    console.log(`${state.mind} was added`);
    console.log(`${state.body} was added`);
    console.log(`${state.soul} was added`);
    // var stateParameters = {parameters: state};
    // console.log(stateParameters)
    var context = this;
    $.ajax({
      url: '/users/post',
      type: 'POST',
      data: state
    })
    .done(function (res) {
      console.log('input added');
      // context.get();
    })
    .fail(function(err) {
      console.log('Error adding input');
      throw err;
    })
  };

  get () { // READ
    var context = this;
    $.ajax({
      url: '/users/get',
    })
    .done(function(data) {
      console.log('Print data to screen...');
      context.setState({
        items: data
      })
    })
    .fail(function(err) {
      console.log('err', err);
    })
  };

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleChangeMind(e) {
    this.setState({
      mind: e.target.value
    });
  }

  handleChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }
  
  handleChangeSoul(e) {
    this.setState({
      soul: e.target.value
    });
  }

  handleClick(query) {
    this.add(this.state);
    this.setState({
      name: '',
      mind: '',
      body: '',
      soul: ''
    })
  }

  render() {
    return (
      <div>
        <form className="new-form">
          
          <div className="form-group">
            <label for="nameInput">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Your name / ID" value={this.state.name} onChange={this.handleChangeName.bind(this)}></input>
          </div>

          <div className="form-group">
            <label for="mindInput">Mind</label>
            <input type="text" className="form-control" id="mindInput" placeholder="Hours Slept (0-10)" value={this.state.mind} onChange={this.handleChangeMind.bind(this)}></input>
          </div>

          <div className="form-group">
            <label for="bodyInput">Body</label>
            <input type="text" className="form-control" id="bodyInput" placeholder="Exercise in 10 min (0-10)" value={this.state.body} onChange={this.handleChangeBody.bind(this)}></input>
          </div>

          <div className="form-group">
            <label for="soulInput">Soul</label>
            <input type="text" className="form-control" id="soulInput" placeholder="Mood Scale (0-10)" value={this.state.soul} onChange={this.handleChangeSoul.bind(this)}></input>
          </div>

        </form>
        <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Submit</button>

      </div> 
    )
  }
}

export default CategoryList;

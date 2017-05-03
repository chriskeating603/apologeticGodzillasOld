import React from 'react';

class CategoryList extends React.Component {
  constructor(props) {
    super (props);

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h4>Mind</h4>
            <h6>Hours Slept</h6>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Body</h4>
            <h6>Exercise (in 10 minutes)</h6>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Spirit</h4>
            <h6>Mood Scale (0-10)</h6>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryList;


/*
The mind category is a "Hours Slept" input, the body category is "Exercise (in 10 minutes)"  
and Soul is "Mood Scale (1-10)". There will be one input button to send all three inputs to the server. 
Most likely in an object format with Mind, Body, and Soul keys
*/

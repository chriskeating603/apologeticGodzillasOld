import React from 'react';
import CategoryList from './CategoryList.jsx';
import Graph from './Graph.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">

          <div className="col-sm-4">
            <CategoryList />
          </div>

          <div className="col-sm-8">
            <Graph />
          </div>

        </div>
      </div>
    )
  }
}

export default Dashboard;

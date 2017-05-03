import React from 'react';

class CategoryList extends React.Component {
  constructor(props) {
    super (props);

  }

  render() {
    return (
      <div>

        <div className="row mind">
          MIND
        </div>

        <div className="row body">
          BODY
        </div>

        <div className="row spirit">
          SPIRIT
        </div>

      </div>
    )
  }
}

export default CategoryList;

// <div className="row">
//   <div className="col-sm-4">
//     <div className="row mind">
//       MIND
//     </div>
//     <div className="row body">
//       BODY
//     </div>
//     <div className="row spirit">
//       SPIRIT
//     </div>
//   </div>
//   <div className="col-sm-8 graphs">
//     <div className="row">
//     GRAPHS GO HERE
//     </div>
//   </div>
//   </div>
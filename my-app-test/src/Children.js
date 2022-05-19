import React from "react";

const Children = (props) => {
  return (
    <h1 className="App">
      Here is the example of Children's in JSK {props.children}
    </h1>
  );
};

// class based
// class Children extends Component {
//     render(){
//         return <h1 className="App">Hello {this.props.children}</h1>
//     }
// };

export default Children;

// import { render } from 'node-sass'; 
import React, { Component } from 'react';
// import React, from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
// ======================

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// ==========================

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleClick = () => {
    //CHANGING THE STATE
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    // BUILD AND R ETURN HTML
    return (
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
        Hello {this.props.name}
      </div>
    );
  }
}
// =========================
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World!" />, root);
}

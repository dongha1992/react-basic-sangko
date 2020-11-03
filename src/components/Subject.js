import React, { Component } from "react";
class Subject extends Component {
  render() {
    return (
      <header>
        <h2
          herf="/"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}
        >
          {this.props.title}
        </h2>
        {this.props.desc}
      </header>
    );
  }
}
export default Subject;

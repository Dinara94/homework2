import React, { Component } from "react";
import ListItem from "./../listItem/ListItem";

import "./list.css";

export default class List extends Component {
  render() {
    return (
      <>
        <h1 className="title">ToDo list</h1>
        <ul className="list">
          {this.props.list.map((str) => (
            <ListItem key={str.id} item={str} />
          ))}
        </ul>
      </>
    );
  }
}

import "./listItem.css";

import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    return this.props.item.completed ? (
      <li className="listDone">{this.props.item.title}</li>
    ) : (
      <li className="listUndone">{this.props.item.title}</li>
    );
  }
}

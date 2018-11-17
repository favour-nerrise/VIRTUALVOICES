import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props){
    super(props);

    this.renderEntries = this.renderEntries.bind(this)
  }

  renderEntries() {
    return this.props.entries.map((entry, i) => (
      <li key={entry.title}>
        <Link className="waves-effect waves-light btn entry-list-item" to={`/entry/${i}`}>
          {entry.title}
          <span>{new Date(entry.date).toDateString()}</span>
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <div className="Home">
        <h1>V^2: Journal Entries</h1>
        <div className="entry-list">
          {this.renderEntries()}
        </div>
        <Link className="waves-effect waves-light btn" to="/new">+</Link>
      </div>
    );
  }
}

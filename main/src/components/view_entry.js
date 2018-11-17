import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Emotion from './emotion';

export default class ViewEntry extends Component {

  render() {
    const { id } = this.props.match.params;    
    const entry = this.props.entries[id];
    if(!entry)
      return (
        <div>
          <Link to="/" className="waves-effect waves-light btn">Home</Link>
          <h2>404 Entry Not Found</h2>
        </div>
      );
    return (
      <div className="View-Entry">
        <Link to="/" className="waves-effect waves-light btn">Home</Link>
        <h1>{entry.title}</h1>
        <div className="entry-list-item-date">{new Date(entry.date).toDateString()}</div>
        <p className="entry-list-item-log">{entry.log}</p>
        <h2>Transcription:</h2>
        <p>{entry.phrase}</p>
        <Emotion emotion={entry.emotion}></Emotion>
      </div>
    );
  }
}
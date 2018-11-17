import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './home';
import ViewEntry from './view_entry';
import NewEntry from './new_entry';



// import Language from '@google-cloud/language';

// Instantiates a client
// const client = new Language.LanguageServiceClient();

// // The text to analyze
// const text = 'Hello, world!';
//
// const document = {
//   content: text,
//   type: 'PLAIN_TEXT',
// };
//
// // Detects the sentiment of the text
// client
//   .analyzeSentiment({document: document})
//   .then(results => {
//     const sentiment = results[0].documentSentiment;
//
//     console.log(`Text: ${text}`);
//     console.log(`Sentiment score: ${sentiment.score}`);
//     console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [
        {
          title: 'First Entry - Default',
          date: '2018-11-17',
          phrase: 'lorem',
          log: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime nobis totam a in laudantium tenetur deserunt inventore sit molestiae officia doloremque accusantium, voluptate praesentium placeat quo rerum ab dolore`,
          emotion: {
            Neutral: 0.760,
            Positive: 0.000,
            Negative: 0.238
            // Angry: 0.001,
            // Fear: 0.000
          },
        }
      ]
    }
  }

  createEntry = (entry) => {
    const Neutral = parseFloat((1 * Math.random()).toFixed(3));
    const Positive = parseFloat(((1 - Neutral) * Math.random()).toFixed(3));
    const Negative = parseFloat(((1 - Positive - Neutral) *  Math.random()).toFixed(3));


    entry.emotion = { Neutral, Positive, Negative}
    this.setState((prevState) => ({
      entries: [...prevState.entries, entry ]
    }));


  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/new" render={() =>(
              <NewEntry createEntry={this.createEntry} />
            )} />
            <Route path="/entry/:id" render={(props) => (
              <ViewEntry {...props} entries={this.state.entries} />
            )}/>
            <Route path="/" render={()=> (
              <Home entries={this.state.entries} />
            )}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

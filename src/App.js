import React from 'react';
import { Form } from './components/Form'
import {SubScribeForm} from './components/SubscribeForm'
import './App.css';

export default class App extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  };


  render() {
    return (
      <div className="App">
        <h1>React </h1>
        <Form />
        <SubScribeForm />
      </div>
    );
  }
}

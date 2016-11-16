import React, { Component } from 'react';

export default class Num extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => { 
      this.props.handler(this.props.step || 1) 
    }, 1000);
  }

  render() {
    return (
      <div>{this.props.number}</div>
    );
  }
}
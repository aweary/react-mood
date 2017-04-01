import React, { Component } from 'react'

export default class ReactMood extends Component {

  componentDidMount() {
    window._IS_USER_MOODY = typeof window._IS_USER_MOODY === "undefined" 
      ? Math.random() > 0.5
      : window._IS_USER_MOODY;
  }

  render() {
    // @TODO everything
    if (window._IS_USER_MOODY) return null;
    return this.props.children;
  }
}
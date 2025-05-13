import React, { Component } from 'react'
import Search from './Search.gif'
export default class spinner extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">
            <img src={Search} alt="loading" />
        </h1>
      </div>
    )
  }
}

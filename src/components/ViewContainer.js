import React, { Component } from 'react'

export default class ViewContainer extends Component {

  render() {
    var styles = Object.assign({}, this.props.styles)

    return (
      <div className="view-container" style={styles}>
        {this.props.children}
      </div>
    )
  }

}

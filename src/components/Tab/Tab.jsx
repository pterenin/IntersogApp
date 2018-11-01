import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style.css";

class Tab extends Component {
  onClick() {
    this.props.selectTab(this.props.name);
  }
  render() {
    return (
      <div 
        className={`tab ${this.props.isSelected ? 'selected' : ''}`}
        onClick={this.onClick.bind(this)}>
        <i className={`fa fa-${this.props.icon}`}></i>
        <span className="number">{ this.props.number }</span>
      </div>
    );
  }
}

Tab.propTypes = {
  isSelected: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.string,
  selectTab: PropTypes.func,
  number: PropTypes.number,
}

export default Tab;
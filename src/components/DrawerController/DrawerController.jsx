import React, { Component } from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import "./style.css";

class DrawerController extends Component {
  onAddClick() {
    if (this.props.selectedTab === 'attachments') return;
    this.props.addNote();
  }
  hadleFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    this.props.addAttachments(file.name);
  }
  render() {
    const positionButtons = this.props.positions.map((position) => {
      return <div
          key={position} 
          className={`position ${position} ${position === this.props.selectedPosition ? 'selected' : ''}`} 
          onClick={this.props.setPosition.bind(this, position)}>
        </div>;
    })
    const showFileInput = this.props.selectedTab === 'attachments';
    return (
      <div className="drawer-controller">
        <label>{startCase(this.props.selectedTab)}</label> 
        <span onClick={ this.onAddClick.bind(this) }>+
          {showFileInput && <input type="file" onChange={this.hadleFileSelect.bind(this)}/> }
        </span>
        <div className="position-buttons">
          { positionButtons }
        </div>
      </div>
    );
  }
}

DrawerController.propTypes = {
  selectedTab: PropTypes.string,
  selectedPosition: PropTypes.string,
  positions: PropTypes.array,
  setPosition: PropTypes.func,
  addNote: PropTypes.func,
  addAttachments: PropTypes.func,
}

export default DrawerController;
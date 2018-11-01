import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import './style.css';

class ResizeHandle extends Component {
  render() {
    const axis = this.props.selectedPosition === 'right' ? 'x' : 'y';
    const position = { right: this.props.width, bottom: this.props.height };
    return (
      <Draggable
        axis={axis}
        onStart={this.props.onResizeStart}
        onDrag={this.props.onResize}
        onStop={this.props.onResizeEnd}
      >
        <div className="resize-handler" style = { position }>
          <div />
          <div />
          <div />
        </div>
      </Draggable>
    );
  }
}

ResizeHandle.propTypes = {
  onResize: PropTypes.func,
  onResizeStart: PropTypes.func,
  onResizeEnd: PropTypes.func,
  selectedPosition: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default ResizeHandle;

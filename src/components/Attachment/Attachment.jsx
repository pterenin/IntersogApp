import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style.css";

class Attachment extends Component {
  getFileType() {
    const fileNameArr =  this.props.attachment.fileName.split('.');
    return fileNameArr[fileNameArr.length - 1];
  }
  render() {
    const { attachment } =  this.props;
    return (
      <div className="attachment">
        <div className="row">
          <i className="fa fa-file">
            <div className="file-type">{this.getFileType()}</div>
          </i>
          <div className="file-name">{ attachment.fileName }</div>
          <i className="fa fa-trash-o" onClick={ this.props.removeAttachment.bind(this, attachment.id) } ></i>
        </div>
        <div className="row">
          <span>{ this.props.attachment.user }</span>
          <span className="date">{ this.props.attachment.date }</span>
        </div>
        <div className="row">
          <span className="provider">{ this.props.attachment.provider }</span>
        </div>
      </div>
    );
  }
}

Attachment.propTypes = {
  attachment: PropTypes.object,
  removeAttachment: PropTypes.func,
}

export default Attachment;
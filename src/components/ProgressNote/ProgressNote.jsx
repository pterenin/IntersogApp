import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./style.css";

class ProgressNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }
  getInitials() {
    const names = this.props.note.user.split(' ');
    return names[0][0] + names[1][0];
  }
  handleChange(e) {
    this.setState({text: e.target.value});
  }
  cancel() {
    this.setState({ text: this.props.note.text });
    this.props.enterEditMode('');
  }
  save() {
    this.props.save(this.state.text);
    this.setState({ text: this.props.note.text });
  }
  componentDidMount() {
    this.setState((state, props) => { 
      return { text: props.note.text };
    });
  }
  render() {
    const { note } =  this.props;
    const isInEditMode = this.props.editedItemId === note.id;
    return (
      <div className={`progress-note ${isInEditMode ? 'edit' : ''}`}>
        {!isInEditMode && <i className="fa fa-edit" onClick={ this.props.enterEditMode.bind(this, note.id) }></i>}
        {isInEditMode && <i className="fa fa-trash-o" onClick={ this.props.removeNote.bind(this, note.id)} ></i>}
        <div className="header">
          <div className="initials">{ this.getInitials() }</div>        
          <span>{ this.props.note.user }</span>
          <span className="provider">{ this.props.note.provider }</span>
        </div>

        {!isInEditMode && <div className="text"><p>{ this.props.note.text }</p></div>}
        {isInEditMode && <textarea value={ this.state.text } onChange={ this.handleChange.bind(this) }></textarea> }
        <span className="date">{ this.props.note.date }</span>
        {isInEditMode && <div className="buttons">
          <div className="save" onClick={this.save.bind(this)}>
            <i>&#10004;</i></div>
          <div className="cancel" onClick={this.cancel.bind(this)}>
            <i>&#10006;</i></div>
        </div>}
      </div>
    );
  }
}

ProgressNote.propTypes = {
  note: PropTypes.object,
  enterEditMode: PropTypes.func,
  save: PropTypes.func,
  removeNote: PropTypes.func,
  editedItemId: PropTypes.string,
}

export default ProgressNote;
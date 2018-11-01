import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';
import DrawerController from '../DrawerController/DrawerController';
import ProgressNote from '../ProgressNote/ProgressNote';
import Attachment from '../Attachment/Attachment';
import ResizeHandle from '../ResizeHandle/ResizeHandle';
import { PROGRESS_NOTES, ATTACHMENTS, TABS } from '../../data';
import uniqueId from 'lodash/uniqueId';
import './style.css';

class Drawer extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'progressNotes',
      progressNotes: PROGRESS_NOTES,
      attachments: ATTACHMENTS,
      editedItemId: '',
      tabs: TABS
    };
  }
  addNote() {
    const { progressNotes } = this.state;
    const newNote = {
      id: uniqueId('note_'),
      user: 'Pavel Terenin',
      date: this.getDate(),
      text: '',
      provider: 'Intersog',
    }
    progressNotes.unshift(newNote);
    this.setState({ progressNotes });
    this.enterEditMode(newNote.id);
  }
  addAttachments(fileName) {
    const { attachments } = this.state;
    const newAttachment = {
      id: uniqueId('note_'),
      user: 'Pavel Terenin',
      date: this.getDate(),
      fileName,
      provider: 'Intersog',
    }
    attachments.unshift(newAttachment);
    this.setState({ attachments });
  }
  removeNote(id) {
    const progressNotes = this.state.progressNotes.filter(note => note.id !== id);
    this.setState({ progressNotes });
  }
  removeAttachment(id) {
    const attachments = this.state.attachments.filter(attachment => attachment.id !== id);
    this.setState({ attachments });
  }
  enterEditMode(id) {
    this.setState({ editedItemId: id });
  }
  exitEditMode() {
    this.setState({ editedItemId: '' });
  }
  selectTab(selectedTab) {
    this.setState({ selectedTab });
  }
  save(text) {
    const { progressNotes } = this.state;
    const note = this.state.progressNotes.find(note => note.id === this.state.editedItemId);
    note.text = text;
    note.date = this.getDate();
    this.setState({ progressNotes });
    this.exitEditMode();
  }
  getDate() {
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
  render() {
    const progressNotes = this.state.progressNotes.map((note, index) => {
      return <ProgressNote 
        key={note.user + index} 
        note={note}
        save={this.save.bind(this)}
        removeNote={this.removeNote.bind(this)}
        editedItemId={this.state.editedItemId}
        enterEditMode={this.enterEditMode.bind(this)}
        />
    });
    const attachments = this.state.attachments.map((attachment, index) => {
      return <Attachment
        key={attachment.user + index} 
        attachment={attachment} 
        removeAttachment = { this.removeAttachment.bind(this) }
        />
    });
    const content = { progressNotes, attachments };
    const drawerSize = { width: this.props.width + 'px', height: this.props.height + 'px'};
    return (
      <div className={`drawer ${this.props.selectedPosition}`} style={ drawerSize }>
        <ResizeHandle 
          onResize = { this.props.onResize }
          selectedPosition={this.props.selectedPosition}
          onResizeStart = { this.props.onResizeStart }
          onResizeEnd = { this.props.onResizeEnd }
          width={ this.props.width }
          height={ this.props.height }
        />
        <Tabs
          progressNotes={this.state.progressNotes}
          attachments={this.state.attachments}
          tabs={this.state.tabs}
          selectedTab={this.state.selectedTab}
          selectTab={this.selectTab.bind(this)}
          />
        <DrawerController
          selectedTab={this.state.selectedTab}
          selectedPosition = { this.props.selectedPosition }
          setPosition = {this.props.setPosition }
          positions = { this.props.positions }
          addNote = { this.addNote.bind(this) }
          addAttachments = { this.addAttachments.bind(this) }
        />
        <div className="content">
          <div className="scroll">
            { content[this.state.selectedTab] }
          </div>
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  positions: PropTypes.array,
  selectedPosition: PropTypes.string,
  setPosition: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
}
export default Drawer;

import React, { Component } from 'react';
import Drawer from "../Drawer/Drawer";
import { POSITIONS, SIZE_LIMITS, INITIAL_SIZE } from '../../data';

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      xPosition: 0,
      yPosition: 0,
      width: INITIAL_SIZE,
      height:  INITIAL_SIZE,
      positions: POSITIONS,
      selectedPosition: 'right',
    }
  }
  setPosition(selectedPosition) {
    this.setState({ selectedPosition });
  }
  setWidth() {
    let width = this.state.xPosition;
    if (width > SIZE_LIMITS.maxWidth) width = SIZE_LIMITS.maxWidth;
    if (width < SIZE_LIMITS.minWidth) width = SIZE_LIMITS.minWidth;
    this.setState({ width });
  }
  setHeight() {
    let height = this.state.yPosition;
    if (height > SIZE_LIMITS.maxHeight) height = SIZE_LIMITS.maxHeight;
    if (height < SIZE_LIMITS.minHeight) height = SIZE_LIMITS.minHeight;
    this.setState({ height });
  }
  onResize(compoevent, resizeInfo) {
    if (this.state.selectedPosition === 'right') {
      const xPosition = this.state.xPosition - resizeInfo.deltaX;
      this.setState({ xPosition });
      this.setWidth();
    } else {
      const yPosition = this.state.yPosition - resizeInfo.deltaY;
      this.setState({ yPosition });
      this.setHeight();
    }
  }
  onResizeStart(event, resizeInfo) {
    this.setState({ xPosition: this.state.width, yPosition: this.state.height });
  }
  onResizeEnd(event, resizeInfo) {
    const {width , height } = this.state;
    localStorage.setItem('width', width);
    localStorage.setItem('height', height);
  }
  componentDidMount() {
    const width = +localStorage.getItem('width') || INITIAL_SIZE;
    const height = +localStorage.getItem('height') || INITIAL_SIZE;
    this.setState({ width, height });
  }
  render() {
    return (
      <div className="app">
        <img src="../../public/Logo.png" alt=""/>
        <h1>Intersog App</h1>
        <Drawer
          width = { this.state.width }
          height = { this.state.height }
          positions = { this.state.positions }
          selectedPosition = { this.state.selectedPosition }
          setPosition = { this.setPosition.bind(this) }
          onResize = { this.onResize.bind(this) }
          onResizeStart = { this.onResizeStart.bind(this) }
          onResizeEnd = { this.onResizeEnd.bind(this) }
        />
      </div>
    );
  }
}
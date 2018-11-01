import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from "../Tab/Tab";
import "./style.css";

class Tabs extends Component {
  render() {
    const tabs = this.props.tabs.map((tab) => {
      return <Tab 
        number = { this.props[tab.name].length }
        key = { tab.name }
        name = { tab.name }
        selectTab = { this.props.selectTab }
        isSelected = { tab.name === this.props.selectedTab }
        icon = { tab.icon }
      />
    });
    return <div className="tabs">
      { tabs }
    </div>  ;
  }
}

Tabs.propTypes = {
  progressNotes: PropTypes.array,
  tabs: PropTypes.array,
  attachments: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTab: PropTypes.func,
}

export default Tabs;
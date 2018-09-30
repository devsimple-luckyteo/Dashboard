import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import SideMenu from 'react-native-side-menu';

import Menu from './Menu';
import { log } from '../../util/Utils';
import Home from '../Home';
import LoadingScreen from '../common/LoadingScreen';

const widthMenu = Dimensions.get('window').width * 0.8;
const TAG = 'SlidMenu';

export default class SlideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: 'About'
    };
    this.toggle = this.toggle.bind(this);
    this.gotoScreen = this.gotoScreen.bind(this);
  }

  
  onMenuItemSelected = item => {
    this.setState({
      isOpen: false,
      selectedItem: item
    });
    const screenName = item.screenName;

    if (screenName === 'Screen_GOOGLE_PLAY_BIAN') {
    } else if (screenName === 'Screen_Copyright') {
    } else {
      this.gotoScreen(screenName);
    }
  };

  navigateScreen(screen, item) {
    const { navigation } = this.props;
    log(`item gotoScreen \n${JSON.stringify(item)}`, TAG);
    navigation.navigate(screen, {
      lang: this.props.lang,
      item
    });
  }

  gotoScreen(screen, item) {
    this.navigateScreen(screen, item);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    const menu = (
      <Menu widthMenu={widthMenu} onItemSelected={this.onMenuItemSelected} />
    );
    const { navigation } = this.props;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
        openMenuOffset={widthMenu}
      >
        <Home
          navigation={navigation}
          isDrawerOpen={this.state.isOpen}
          screenName={this.state.screenName}
          open={this.toggle}
        />
        <LoadingScreen isShow={this.state.loading} />
      </SideMenu>
    );
  }
}

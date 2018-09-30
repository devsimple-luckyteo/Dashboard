import React, { Component } from 'react';
import { StatusBar, View, Dimensions, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import HomeScreen from './Router';
import * as actions from './actions';
import { primary } from './res/ColorPallet';
import { log } from './util/Utils';

const width = Dimensions.get('window').width;

class Main extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);

    log('did mount Main run');
    AsyncStorage.setItem('timeLoadInterstitial', `${0}`);
  }
  componentWillUnmount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', width }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={primary}
          translucent
          networkActivityIndicatorVisible
          animated
        />
        <HomeScreen style={{ flex: 1 }} screenProps={this.state} />
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(Main);

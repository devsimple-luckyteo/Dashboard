import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Text, Icon, Button } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';

// import { connect } from 'react-redux';
// import { fetchData } from '../reduxsaga/actions';

import ComponentBasic from './basic/ComponentBasic';

import { primary } from '../res/ColorPallet';
// import { log } from '../util/Utils';
// import Topbar from './common/Topbar';

// const TAG = 'HOME';

export default class Home extends ComponentBasic {
  constructor(props) {
    super(props);

    this.gotoScreen = this.gotoScreen.bind(this);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  navigateScreen(screen, item) {
    const { navigation } = this.props;
    navigation.navigate(screen, {
      item
    });
  }
  gotoScreen(screen, item) {
    this.navigateScreen(screen, item);
  }

  onPress = () => {
    this.gotoScreen('Screen_ListCate');
  };

  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <ScrollView
          style={{
            width: '100%'
          }}
        >
          <View style={{ alignItems: 'center' }}>
            {/* thang nam solar */}
            <Text
              style={[
                styles.textBorderShadow,
                {
                  color: primary,
                  fontSize: 50,
                  fontWeight: '500'
                }
              ]}
            >
              Dashboard
            </Text>
            <Button title="Go List" onPress={this.onPress} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white'
  }
});

// function mapStateToProps(state) {
//   return {
//     appData: state.appData
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchData: () => dispatch(fetchData())
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);

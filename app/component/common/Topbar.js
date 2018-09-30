import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
  //Platform
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import { moderateScale } from '../utils/ScaleUtil';
import { TOPBAR_HEIGHT } from '../../util/Constants';
import { moderateScale } from '../../util/ScaleUtil';

const Topbar = props => {
  const { line1 } = styles;
  return (
    <View
      style={[
        line1,
        {
          backgroundColor: props.headerBackGroundColor,
          height: props.statusBarHidden
            ? moderateScale(TOPBAR_HEIGHT)
            : moderateScale(TOPBAR_HEIGHT) + getStatusBarHeight(),
          paddingTop: props.statusBarHidden ? 0 : getStatusBarHeight()
        }
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          props.onBack();
        }}
        style={{
          width: props.heightTopbar,
          height: props.heightTopbar,
          //alignItems: 'center',
          justifyContent: 'center',
          //backgroundColor: 'red',
          paddingLeft: moderateScale(10)
        }}
      >
        {props.iconLeft ? props.iconLeft : null}
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          marginLeft: moderateScale(TOPBAR_HEIGHT),
          marginRight: moderateScale(TOPBAR_HEIGHT),
          height: props.heightTopbar,
          //alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {props.title && (props.title !== undefined || props.title !== null) ? (
          <Text
            style={{
              color: '#fff',
              textAlignVertical: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: moderateScale(18)
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {props.title && props.title !== 'undefined' ? props.title : ''}
          </Text>
        ) : null}
      </View>
      <View
        style={{
          width: props.heightTopbar,
          height: props.heightTopbar,
          //alignItems: 'center',
          justifyContent: 'center',
          //backgroundColor: 'red',
          marginRight: moderateScale(7)
        }}
      >
        {props.iconRight ? props.iconRight : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line1: {
    // height:
    //   Platform.OS === 'ios'
    //     ? moderateScale(TOPBAR_HEIGHT) + getStatusBarHeight()
    //     : moderateScale(TOPBAR_HEIGHT),
    // paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    height: moderateScale(TOPBAR_HEIGHT) + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 3
  }
});

export default Topbar;

import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { primary } from '../../res/ColorPallet';

const { width, height } = Dimensions.get('window');
// const widthScreen = Dimensions.get('window').width;

const LoadingScreen = props =>
  props.isShow || props.isVisible ? (
    <View
      style={{
        position: 'absolute',
        width,
        height,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 99999
      }}
    >
      <View
        style={{
          position: 'absolute',
          width: (width * 2) / 3,
          height: 110,
          top: height / 2 - 110,
          left: width / 3 / 2,
          backgroundColor: '#fff',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#ebebeb',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 3,
          zIndex: 99999
        }}
      >
        <Text>Đang xử lý...</Text>

        <Progress.Circle
          size={50}
          indeterminate
          color={primary}
          indeterminate
          borderWidth={3}
        />
      </View>
    </View>
  ) : null;

export default LoadingScreen;

//<Image
//source={Loading}
//style={{
//  width: 50,
//  height: 50,
//  marginTop: 5
//}}
///>

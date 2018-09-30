import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { moderateScale, scale } from '../../util/ScaleUtil';
// import { PADDING_DEFAULT } from '../utils/Constant';

//const widthScreen = Dimensions.get('window').width;
// import { textStyle } from '../utils/StyleAll';

export default class ItemMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };

    this.onPressItem = this.onPressItem.bind(this);
  }
  //props
  //  onPressItem -> method
  onPressItem = () => {
    this.props.onPressItem(this.state.item);
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.onPressItem}
        //key={item.id}
      >
        <View>
          <View style={styles.wrapperItem}>
            <Text style={[styles.itemTextStyle]}>
              Test
            </Text>
          </View>

          <View
            style={{
              height: moderateScale(1),
              backgroundColor: '#0000001A'
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapperItem: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    paddingLeft: moderateScale(10)
  },
  itemTextStyle: {
    fontSize: scale(14),
    fontWeight: 'bold'
  }
});

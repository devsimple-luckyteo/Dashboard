import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';

import { moderateScale } from '../util/ScaleUtil';
import { log } from '../util/Utils';

const widthScreen = Dimensions.get('window').width;

const TAG = 'ItemCategory';

export default class ItemDesCate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.item.items
    };

    this.onPressItem = this.onPressItem.bind(this);
    log('create item DesCate', TAG);
  }

  //props
  //  onPressItem -> method
  onPressItem = () => {
    this.props.onPressItem(this.props.item);
  };

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            log('click title cate', TAG);
            this.onPressItem();
          }}
        >
          <View style={styles.wrapper}>
            <View style={styles.wrapperDetail}>
              <Text style={[ styles.itemTextBold]}>
                {`${this.props.item.name}`.toUpperCase()}
              </Text>
              <Text style={[styles.itemText]}>
                {`${this.props.item.des}`.toUpperCase()}
              </Text>
              <Text style={[styles.itemText]}>
                {`${this.props.item.name}`.toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: 'black'
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    flexDirection: 'row'
  },
  wrapper: {
    marginRight: moderateScale(5),
    marginLeft: moderateScale(5),
    flexDirection: 'column'
  },
  wrapperImg: {
    backgroundColor: 'blue'
  },
  wrapperDetail: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: moderateScale(10)
  },
  itemName: {
    flex: 1,
    justifyContent: 'center'
  },
  itemIndicator: {},
  itemImg: {
    width: (widthScreen * 35) / 100,
    height: (((widthScreen * 35) / 100) * 3) / 2
  },
  itemText: {
    marginTop: moderateScale(15)
  },
  itemTextBold: {
    fontWeight: 'bold'
  }
});

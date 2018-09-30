import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  LABEL_TITLE_CIRCADIAN_RHYTHM_CHART,
  LABEL_TITLE_NUMEROLOGY,
  LABEL_TITLE_TC_ZODIAC,
  LABEL_TITLE_TH_ZODIAC,
  LABEL_TITLE_TC_BLOOD_GROUP,
  LABEL_TITLE_TH_BLOOD_GROUP,
  LABEL_TITLE_HUONG_NHA,
  LABEL_TITLE_COPYRIGHT
} from '../../res/strings';
import { primary } from '../../res/ColorPallet';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#f9f9f9', //'#5e5e5e',
    paddingTop: getStatusBarHeight(),
    paddingLeft: 10,
    paddingRight: 10
  },
  itemText: {
    fontSize: 18,
    fontWeight: '400'
  }
});

export default function Menu({ widthMenu, onItemSelected }) {
  const listMenu = [];
  listMenu.push({
    id: 1,
    name: LABEL_TITLE_CIRCADIAN_RHYTHM_CHART,
    screenName: 'Screen_CRC'
  });
  listMenu.push({
    id: 2,
    name: LABEL_TITLE_NUMEROLOGY,
    screenName: 'Screen_BoiNumerology'
  });

  listMenu.push({
    id: 3,
    name: LABEL_TITLE_TC_ZODIAC,
    screenName: 'Screen_GOOGLE_PLAY_BIAN'
  });
  listMenu.push({
    id: 4,
    name: LABEL_TITLE_TH_ZODIAC,
    screenName: 'Screen_GOOGLE_PLAY_BIAN'
  });

  listMenu.push({
    id: 5,
    name: LABEL_TITLE_TC_BLOOD_GROUP,
    screenName: 'Screen_GOOGLE_PLAY_BIAN'
  });
  listMenu.push({
    id: 6,
    name: LABEL_TITLE_TH_BLOOD_GROUP,
    screenName: 'Screen_GOOGLE_PLAY_BIAN'
  });
  listMenu.push({
    id: 6,
    name: LABEL_TITLE_HUONG_NHA,
    screenName: 'Screen_GOOGLE_PLAY_BIAN'
  });
  listMenu.push({
    id: 6,
    name: LABEL_TITLE_COPYRIGHT,
    screenName: 'Screen_Copyright'
  });

  return (
    <ScrollView
      scrollsToTop={false}
      style={[styles.menu, { width: widthMenu }]}
    >
      {listMenu.map((item, index) => (
        <View style={{}} key={index.toString()}>
          <Text
            onPress={() => onItemSelected(item)}
            style={[
              styles.itemText,
              {
                paddingTop: 15,
                paddingBottom: 15,
                color: 'black'
              }
            ]}
          >
            {item.name}
          </Text>
          {index <= listMenu.length - 1 ? (
            <View style={{ height: 1, backgroundColor: 'black' }} />
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired
};

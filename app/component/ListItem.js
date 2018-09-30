import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import ComponentBasic from './basic/ComponentBasic';
import FlatListSingleClick from './common/FlatListSingleClick';
import Topbar from './common/Topbar';
import ItemDesCate from './ItemDesCate';
import { log } from '../util/Utils';
import { moderateScale } from '../util/ScaleUtil';
import { TOPBAR_HEIGHT } from '../util/Constants';
import { primary } from '../res/ColorPallet';

const TAG = 'ListCategory';

export default class ListItem extends ComponentBasic {
  constructor(props) {
    super(props);

    const list = [];
    for (let index = 0; index < 10; index++) {
      list.push({ id: index, name: `cate ${index}`, des: 'Decription' });
    }
    this.state = {
      item: this.props.navigation.state.params.item,
      refreshing: false,
      list
    };
  }

  FlatListItemSeparator = () => (
    <View
      style={{
        height: moderateScale(20),
        backgroundColor: '#00000000'
      }}
    />
  );

  handlerRefresh = () => {
    log('handler Refresh', TAG);
  };

  gotoScreen(screen, item) {
    const { navigation } = this.props;
    log(`item  \n${JSON.stringify(item)}`, TAG);
    navigation.navigate(screen, {
      item
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Topbar
          onBack={() => this.back()}
          heightTopbar={moderateScale(TOPBAR_HEIGHT)}
          headerBackGroundColor={primary}
          iconLeft={
            <Icon name="chevron-left" size={moderateScale(30)} color={'#fff'} />
          }
          title="Category Name"
          titleTextStyle={styles.titleStyle}
        />

        <FlatListSingleClick
          //styleFlatlist={wrapperFlatList}
          style={{ flex: 1 }}
          data={this.state.list}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderCustomItem={(item, onPressItem, idSelected) => (
            <ItemDesCate
              id={item.id}
              onPressItem={onPressItem}
              selected={idSelected}
              item={item}
            />
          )}
          //ListFooterComponent={this.renderFooter}
          refreshing={this.state.refreshing}
          onRefresh={this.handlerRefresh}
          onItemClick={item => {
            log(`click item click cate ${JSON.stringify(item)}`, TAG);
            this.gotoScreen('Screen_DetailBook', item);
          }}
          // onEndReached={this.handlerEndReach}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column'
  }
});

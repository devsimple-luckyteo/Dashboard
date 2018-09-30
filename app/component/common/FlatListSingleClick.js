import React from 'react';
import { FlatList } from 'react-native';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

import { log } from '../../util/Utils';

const TAG = 'FlatListSingleclick';

export default class FlatListSingleclick extends React.PureComponent {
  state = {
    selected: new Map(),
    previousID: -1
  };
  onPressItem = item => {
    if (this.props.enableSelected) {
      //updater functions are preferred for transactional updates
      this.setState(state => {
        console.log(state);

        if (state.previousID >= 0) {
          log(`co previous roi log id [${state.previousID}]`, 'TAG');

          state.selected.set(state.previousID, false); //false
        }
        // copy the map rather than modifying state.
        const selected = new Map(state.selected);
        console.log(selected);
        selected.set(item.id, true); // toggle
        console.log(selected.get(item.id));
        const newPreviousID = item.id;
        console.log(newPreviousID);
        return { selected, previousID: newPreviousID };
      });
    }
    if (this.props.onItemClick !== null) {
      this.props.onItemClick(item);
    }
  };

  getData = () => {
    if (this.props.data && this.props.data.length > 0) {
      return this.props.data;
    }
    return null;
  };

  keyExtractor = (item, index) => index.toString();

  scrollToIndex(index, animated = true) {
    this.flatListRef.scrollToIndex({ animated, index });
  }
  renderItem = ({ item }) =>
    this.props.renderCustomItem(
      item,
      this.onPressItem,
      this.state.selected.get(item.id)
    );
  render() {
    const myProps = {
      numColumns: this.props.numColumns ? this.props.numColumns : 1,
      style: this.props.styleFlatlist,
      data: this.props.data,
      extraData: this.props,
      keyExtractor: this.keyExtractor,
      renderItem: this.renderItem,
      ItemSeparatorComponent: this.props.ItemSeparatorComponent,
      ListHeaderComponent: this.props.ListHeaderComponent,
      ListFooterComponent: this.props.ListFooterComponent,
      refreshing: this.props.refreshing,
      onRefresh: this.props.onRefresh,
      onEndReachedThreshold: 0.1,
      onEndReached: this.props.onEndReached,
      horizontal: this.props.horizontal,
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false
    };
    if (this.props.optimize) {
      return (
        <OptimizedFlatList
          ref={component => {
            this.flatListRef = component;
          }}
          {...myProps}
        />
      );
    }
    return (
      <FlatList
        ref={component => {
          this.flatListRef = component;
        }}
        {...myProps}
      />
    );
  }
}

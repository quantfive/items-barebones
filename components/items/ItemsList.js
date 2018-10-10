/***
 * List of Items
 * @patr
 */
import React from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';

// Components
import Item from './Item';

export default class ItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      ready: false,
    }
  }

  /***
   * Refreshes the list
   */
  onRefresh = async () => {
    this.setState({
      refreshing: true,
    });

    this.props.refresh && await this.props.refresh();
    this.setState({
      refreshing: false,
    });
  }

  /***
   * Renders the product
   * @params { listItem } -- the item in the list with params item, index
   */
  renderItem = (listItem) => {
    return (
      <Item 
        itemGroup={listItem.item}
        index={listItem.index}
      />
    );
  }

  /***
   * Extracts the key for FlatList
   */
  _keyExtractor = (item, index) => `${item.id}_${index}`;

  render() {
    return (
      <FlatList
        data={this.props.items}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        onRefresh={this.onRefresh}
        numColumns={1}
        refreshing={this.state.refreshing}
        removeClippedSubviews={true}
        onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
      />
    );
  }
}

var styles = StyleSheet.create({
  columnWrapperStyle: {
    height: '100%',
  },
  list: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 16,
    fontSize: 20,
  },
  noResults: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    height: 125,
    width: 125,
    opacity: .7,
    marginTop: 50,
  },
})
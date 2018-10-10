import React from 'react';
import { Platform } from 'react-native';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// NPM Modules
import { Icon } from 'expo';

// Components
import ItemsList from '../components/items/ItemsList';

export default class MyListingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name
  });

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          all_items: [
            {id: 1, name: 'Pencil', url: 'https://cdn.shopify.com/s/files/1/0787/5255/products/Bando_complimentpencilset-bts16_1024x1024.jpg?v=1525806099', price: 10,},
            {id: 2, name: 'Paper', url: 'https://4.imimg.com/data4/IY/GU/MY-11466892/75-gsm-a4-copier-paper-1079606-500x500.jpg', price: 8}],
        },
        {
          id: 2,
          all_items: [{id: 3, name: 'Pen', url: 'https://cdna.4imprint.com/prod/extras/113165/398836/700/3.jpg', price: 5}]
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ItemsList
          items={this.state.items}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
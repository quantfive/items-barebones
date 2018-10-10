/***
 * List of products
 * @patr
 */
import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

// NPM Modules
import { withNavigation } from 'react-navigation';

class SingleItem extends React.Component {

  navigateToEditItems = () => {
    // let listParams = this.props.navigation.state.params;
    let params = {
      item: this.props.item,
      index: this.props.itemIndex,
    }
    this.props.navigation.navigate('EditItemScreen', params)
  }

  render() {
    return (
      <View style={[styles.item]} key={`${this.props.item.id}_order_item`}>
        <Image
          style={[styles.img]}
          source={{uri: this.props.item.url}}
          resizeMethod="resize"
        />
        <View style={styles.text}>
          <Text style={styles.productName}>
            { this.props.item.name }
          </Text>
        </View>
      </View>
    );
  }
}

let { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    paddingTop: 16,
    borderBottomWidth: 1,
  },
  quantity: {
    position: 'absolute',
    right: 0,
    opacity: .7,
  },
  productName: {
    letterSpacing: .7,
  },
  text: {
    paddingLeft: 16,
    paddingRight: 8,
    flex: 1,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 4
  },
  info: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default withNavigation(SingleItem)
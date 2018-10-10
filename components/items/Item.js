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

class Item extends React.Component {

  navigateToEditItems = () => {
    let params = {
      itemGroup: this.props.itemGroup,
      title: `ID #${this.props.itemGroup.id}`,
      index: this.props.index,
    }
    this.props.navigation.navigate('ItemGroupScreen', params)
  }

  render() {
    let price = 0;
    let item_count = {};
    let item_map = {};
    let item_sizes = {};
    for (let i = 0; i < this.props.itemGroup.all_items.length; i++) {
      let item = this.props.itemGroup.all_items[i];
      price += item.price;

      if (item.name in item_count) {
        item_count[item.name] += 1;
      } else {
        item_count[item.name] = 1;
        item_map[item.name] = item;
      }
    }

    let items = Object.keys(item_map).map((key, index) => {
      let item = item_map[key];
      return (
        <View style={[styles.item, index === 0 && styles.firstItem]} key={`${item.id}_order_item`}>
          <Image
            style={[styles.img, index !== 0 && styles.overlapImg]}
            source={{uri: item.url}}
            resizeMethod="resize"
          />
          <View style={styles.text}>
            <Text style={styles.productName}>
              { item.name }
            </Text>
          </View>
          <Text style={styles.quantity}>
            x{ item_count[key] }
          </Text>
        </View>
      );
    });

    return (
      <View style={[styles.productContainer]}>
        <TouchableOpacity style={styles.touchable} onPress={this.navigateToEditItems}>
          <View style={[styles.consignment]} contentContainerStyle={styles.product}>
            <View style={[
                styles.listing, 
              ]}>
              <View style={[
                styles.title,
              ]}>
                <Text style={[styles.info, styles.consignmentText]}>
                  ID #{this.props.itemGroup.id}
                </Text>
              </View>
            </View>
            <View style={styles.photoGroup}>
              { items }
            </View>
            <Text style={styles.price}>
              ${ price }
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

let { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 24,
    paddingTop:8,
  },
  quantity: {
    position: 'absolute',
    right: 0,
    opacity: .7,
  },
  touchable: {
    height: '100%',
  },
  productName: {
    letterSpacing: .7,
  },
  size: {
    letterSpacing: .7,
    opacity: .7,
  },
  text: {
    paddingLeft: 16,
    paddingRight: 8,
    flex: 1,
  },
  product: {
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    height: '100%',
  },
  photoGroup: {
    width: '100%',
    overflow: 'hidden',
    // marginTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    paddingTop: 16,
  },
  listing: {
    marginBottom: 8,
    alignItems: 'center',
    width: '100%',
    // padding: 8,
  },
  listingText: {
    letterSpacing: .7,
  },
  consignmentText: {
    letterSpacing: .7,
  },
  title: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    opacity: .5,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 4
  },
  sku: {
    fontSize: 14,
    opacity: .7,
    marginTop: 4,
    textAlign: 'center',
  },
  priceBanner: {
    borderRadius: 50,
  },
  info: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  firstInfo: {
    marginTop: 16,
  },
  price: {
    opacity: 1,
    fontSize: 15,
    letterSpacing: .7,
    textAlign: 'right',
    paddingRight: 16,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pendingPriceBanner: {
    backgroundColor: 'rgba(255,165,0, .8)',
  },
  consignmentInfo: {
    paddingLeft: 12,
    paddingRight: 12,
  },
})

export default withNavigation(Item)
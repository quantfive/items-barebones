import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Icon, LinearGradient } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.links = [
      {name: 'SOLD', id: 'sold', route: 'MyListingsScreen', ios: 'ios-pricetag-outline', android: 'md-pricetag', iconStyle: 'soldIcon'},
      {name: 'LISTED', id: 'listed', route: 'MyListingsScreen', ios: 'ios-add-outline', android: 'md-add', iconStyle: 'uploadIcon'},
      {name: 'APPROVED', id: 'approved', route: 'MyListingsScreen', ios: 'ios-checkmark-outline', android: 'md-checkmark', iconStyle: 'checkmarkIcon'},
      {name: 'PENDING', id: 'pending', route: 'MyListingsScreen', ios: 'ios-refresh-outline', android: 'md-refresh', iconStyle: 'pendingIcon'},
      {name: 'REJECTED', id: 'rejected', route: 'MyListingsScreen', ios: 'ios-close-outline', android: 'md-close', iconStyle: 'rejectedIcon'},
    ];

    this.state = {

    }
  }

  navigateToLink = (name, id, route) => {
    this.props.navigation.navigate(route, {name: name, id: id})
  }

  render() {
    let links = this.links.map((link, index) => {
      return (
        <View style={styles.row} key={`menu_${link.id}`}>
          <TouchableHighlight 
            onPress={() => this.navigateToLink(link.name, link.id, link.route)}
            activeOpacity={1}
            underlayColor={'#000'}
            style={styles.pressable}
          >
            <View style={[styles.linkContainer]}>
              <Text style={[styles.link]}>
                { link.name }
              </Text>
              <LinearGradient
                colors={['#fff', '#fff']}
                start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}
                style={styles.backgroundView}>
                <Icon.Ionicons
                  name={Platform.OS === 'ios' ? link.ios : link.android}
                  size={link.id === 'sold' ? 22 : 30}
                  style={[styles.icon, link.id === 'sold' && styles.sold]}
                />
              </LinearGradient>
            </View>
          </TouchableHighlight>
        </View>
      )
    })
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.allLinks}>
            { links }
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247, 247, 247)',
  },
  contentContainer: {
    paddingTop: 60,
  },
  link: {
    flex: 1,
  },
  row: {
    marginBottom: 8,
    marginTop: 8,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  linkContainer: {
    padding: 20,
    paddingLeft: 0,
    borderRadius: 4,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, .97)',
  },

  icon: {
    // color: '#fff',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

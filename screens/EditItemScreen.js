import React from 'react';
import { Platform } from 'react-native';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

export default class EditItemScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {
        name: '',
        url: '',
      }
    }
  }

  onChange = (text) => {
    let item = {...this.state.item};
    item.name = text;

    this.setState({
      item,
    })
  }

  componentDidMount = () => {
    let item = this.props.navigation.state.params.item;
    this.setState({
      item,
    })
  }

  save = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.img}
            source={{uri: this.state.item.url}}
            resizeMethod="resize"
          />
          <View style={styles.nameChange}>
            <Text> Name: </Text>
            <TextInput
              onChangeText={this.onChange}
              value={this.state.item.name}
              controlled={true}
              style={styles.input}
              underlineColorAndroid='transparent'
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={this.save}>
          <Text style={styles.buttonText}>
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 8,
  },
  nameChange: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  input: {
    borderWidth: 1,
    padding: 16,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    height: 80,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
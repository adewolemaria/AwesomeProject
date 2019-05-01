import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableHighlight,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Bible from '../Bible/kjv';

export class RateApp extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { listLoaded: false, bookObj: '' };
  }

  componentDidMount() {
    const bibleBooks = Object.values(Bible.books);
    Object.keys(bibleBooks).map(chapter => {
      this.setState({
        bookObj: bibleBooks[chapter]
      });
    });
    console.log(this.state.bookObj);
  }

  render() {
    return (
      <View>
        {this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <FlatList
              data={this.state.bookObj}
              renderItem={({ item }) => <Text>{item}</Text>}
            />
          </View>
        )}
        {!this.state.listLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text> Loading... </Text>
          </View>
        )}
      </View>
    );
  }
}

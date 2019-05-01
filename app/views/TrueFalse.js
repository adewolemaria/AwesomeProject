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

export class TrueFalse extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <Text> REALLY!!!... </Text>
      </View>
    );
  }
}

import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Alert,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { SettingsMenu } from '../sections/SettingsMenu.js';

export class Settings extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.buttonRow1}>
        <SettingsMenu navigate={navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow1: {
    paddingVertical: 40,
    flex: 2,
    flexDirection: 'column',
    color: '#fff'
  },
  buttonText: {
    paddingTop: '3%',
    paddingBottom: '3%',
    color: '#fff',
    fontSize: 18,
    width: '85%'
  },
  buttonStyles: {
    height: '8%',
    flexDirection: 'row',
    backgroundColor: '#3a3434',
    borderColor: '#f3f3f3',
    borderBottomWidth: 0.5
  }
});

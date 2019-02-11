import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Alert,
  TouchableOpacity,
  Share
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

export class SettingsMenu extends React.Component {
  static navigationOptions = {
    header: null
  };

  onClick() {
    Share.share(
      {
        message: 'Check My BibleQuizz App',
        url: 'http://bam.tech',
        title: 'Wow, did you see that?'
      },
      {
        // Android only:
        dialogTitle: 'Check My BibleQuizz App'
      }
    );
  }

  render() {
    return (
      <View style={styles.buttonRow1}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => this.props.navigate('')}
        >
          <Ionicons
            name="md-help"
            style={{
              width: 40,
              paddingLeft: '2%',
              paddingTop: '3%',
              paddingBottom: '3%'
            }}
            size={25}
            color="#f3f3f3"
          />
          <Text style={styles.buttonText}>About the App</Text>
          <Ionicons
            name="md-arrow-dropright"
            style={{
              width: 20,
              paddingTop: '3%',
              paddingBottom: '3%'
            }}
            size={25}
            color="#f3f3f3"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={this.onClick}>
          <Ionicons
            name="md-share-alt"
            style={{
              width: 40,
              paddingTop: '3%',
              paddingBottom: '3%',
              paddingLeft: '2%'
            }}
            size={25}
            color="#f3f3f3"
          />
          <Text style={styles.buttonText}>Share</Text>
          <Ionicons
            name="md-arrow-dropright"
            style={{ width: 30, paddingTop: '3%', paddingBottom: '3%' }}
            size={25}
            color="#f3f3f3"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => this.props.navigate('')}
        >
          <Ionicons
            name="md-contact"
            style={{
              width: 40,
              paddingTop: '3%',
              paddingBottom: '3%',
              paddingLeft: '2%'
            }}
            size={25}
            color="#f3f3f3"
          />
          <Text style={styles.buttonText}>Contact</Text>
          <Ionicons
            name="md-arrow-dropright"
            style={{ width: 20, paddingTop: '3%', paddingBottom: '3%' }}
            size={25}
            color="#f3f3f3"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow1: {
    paddingVertical: 40,
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#292929',
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

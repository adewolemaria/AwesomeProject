import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Alert,
  TouchableOpacity,
  Share,
  Linking
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

export class SettingsMenu extends React.Component {
  static navigationOptions = {};

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
        <Text style={styles.setting_section}>Main</Text>
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
        <Text style={styles.setting_section}>
          Report a Bug or Ask a Question
        </Text>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => Linking.openURL('mailto:adewolemayowa@gmail.com')}
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
    flex: 2,
    flexDirection: 'column',
    // backgroundColor: '#F9F9FA',
    color: '#fff'
  },
  setting_section: {
    padding: 30,
    fontSize: 18,
    borderColor: '#f3f3f3',
    borderBottomWidth: 0.5
  },
  buttonText: {
    paddingTop: '3%',
    paddingBottom: '3%',
    color: '#424242',
    fontSize: 18,
    width: '85%'
  },
  buttonStyles: {
    height: '8%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#f3f3f3',
    borderBottomWidth: 0.5
  }
});

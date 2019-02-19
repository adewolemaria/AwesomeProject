import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Alert,
  Icon,
  TouchableOpacity
} from 'react-native';
import { Menu } from '../sections/Menu.js';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-material-cards';

export class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require('../img/memphis.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <View style={styles.card_style}>
              <View style={styles.card_header}>
                <View style={styles.card_header_left}>
                  <Text style={styles.scripture}> Verse of the Day</Text>
                  <Text style={{ color: '#c10b57' }}> Romans 8:28</Text>
                </View>
                <View style={styles.card_header_right}>
                  <Text>Share</Text>
                </View>
              </View>
              <View style={styles.card_content}>
                <View style={styles.card_content_left}>
                  <Text style={styles.verse}>
                    And we know that in all things God works for the good of
                    those who love him, who have been called according to his
                    purpose.
                  </Text>
                </View>
                <View style={styles.card_content_right}>
                  <Text style={styles.verse}>ESV</Text>
                </View>
              </View>
            </View>
          </View>
          <Menu navigate={navigate} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlayContainer: {
    flex: 1
  },
  top: {
    padding: 20,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card_style: {
    shadowColor: 'rgba(222,222,222,0.83)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.7,
    width: '95%',
    backgroundColor: '#fff'
  },
  verse: {
    padding: 20
  },
  card_header: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#fafafa',
    width: '100%'
  },
  card_content: {
    flexDirection: 'column'
  },

  card_header_left: {
    width: '85%'
  },
  card_content_right: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  card_header_right: {},
  scripture: {
    alignItems: 'center'
  }
});

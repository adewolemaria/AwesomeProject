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
      <View style={styles.overlayContainer}>
        <View style={styles.top}>
          <Card>
            <CardTitle
              style={styles.card_header}
              title="Romans 8:28"
              subtitle="Verse of the Day"
            />
            <CardContent
              style={styles.card_content}
              text="And we know that for those who love God all things work together for good, for those who are called according to his purpose."
            />
            <CardAction separator={true} inColumn={false} />
          </Card>
        </View>
        <Menu navigate={navigate} />
      </View>
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
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  top: {
    padding: 20,
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

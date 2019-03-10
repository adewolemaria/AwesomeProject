import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ProgressViewIOS
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export class Qa extends React.Component {
  static navigationOptions = {
    header: null
  };

  onPress = () => {
    Alert.alert('You tapped the button!');
  };

  render() {
    return (
      <LinearGradient colors={['#0D0B18', '#28263E']} style={styles.container}>
        <View style={styles.question_container}>
          <View style={styles.question_count}>
            <Ionicons
              name="md-arrow-round-back"
              style={{
                paddingLeft: '5%',
                width: '35%'
              }}
              size={25}
              color="#f3f3f3"
            />
            <Text style={styles.counter}>Question 1 of 10</Text>
          </View>
          <Text style={styles.question}>
            After Jesus rose from the dead, how long did he remain on earth
            before ascending to heaven?
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>12 ddays</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>40 ddays</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>3 months</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSelectedStyle}
            onPress={this.onPress}
          >
            <Text style={styles.buttonTextSelected}>1 year</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.progressStyle}>
          <ProgressViewIOS style={styles.progressView} progress={0.2} />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3
  },
  counter: {
    paddingVertical: 5,
    textAlign: 'center',
    color: 'white'
  },
  question: {
    paddingRight: '5%',
    paddingLeft: '5%',
    width: '100%',
    alignItems: 'center',
    color: '#fff',
    fontSize: 25
  },
  buttonRow: {
    flexDirection: 'column',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  question_count: {
    flexDirection: 'row',
    paddingVertical: 60
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: '#d6006f',
    width: '70%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  buttonSelectedStyle: {
    backgroundColor: '#fff',
    width: '70%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: '#fff'
  },
  buttonTextSelected: {
    color: '#000'
  },

  progressView: {
    width: '90%'
  },
  progressStyle: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

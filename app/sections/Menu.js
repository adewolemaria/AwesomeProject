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

export class Menu extends React.Component {
  onPress = () => {
    Alert.alert('You tapped the button!');
  };

  render() {
    return (
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => this.props.navigate('QuizScreenRT')}
        >
          <Text style={styles.buttonText}>QUIZ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => this.props.navigate('ExamRT')}
        >
          <Text style={styles.buttonText}>FLASHCARDS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => this.props.navigate('RateAppRT')}
        >
          <Text style={styles.buttonText}>RATE THIS APP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => this.props.navigate('SettingsRT')}
        >
          <Text style={styles.buttonText}>SETTINGS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonText: {
    color: '#292929',
    fontSize: 18
  },
  buttonStyles: {
    shadowColor: 'rgba(222,222,222,0.83)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    width: '60%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#c10b57'
  }
});

import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ProgressViewIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo'

export class Qa extends React.Component {
 static navigationOptions = {
    header: null
  };

  onPress = () => {
    Alert.alert('You tapped the button!');
  }


  render() {
    return (
      
      <LinearGradient colors={['#0D0B18','#28263E']} style={styles.container}>
        <Text style={styles.question}>After Jesus rose from the dead, how long did he remain on earth before ascending to heaven? </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>12 days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
            <Text style={styles.buttonText}>40 days</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyle}onPress={this.onPress}>
            <Text style={styles.buttonText}>3 months</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSelectedStyle} onPress={this.onPress}>
            <Text style={styles.buttonTextSelected}>1 year</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.progressStyle}>
          <ProgressViewIOS
            style={styles.progressView}
            progress={(0.2)}
          />
        </View>
        
      </LinearGradient>
    );
  }
};


const styles = StyleSheet.create ({
 container: {
   flex: 3,
 },
 question: {
   paddingTop: '20%',
   padding: 30,
   flex: 1,
   color: '#fff',
   fontSize: 25
 },
  buttonRow : {
    flexDirection: 'row',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    backgroundColor: '#fff',
    width: '40%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  buttonSelectedStyle: {
    borderWidth: 1,
    borderColor: '#d6006f',
    width: '40%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText: {
    color: '#000'
  },
  buttonTextSelected: {
    color: '#fff'
  },

  progressView: { 
    width: '90%',
  },
  progressStyle: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
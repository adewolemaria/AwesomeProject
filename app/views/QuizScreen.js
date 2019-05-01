import React from 'react';
import { StyleSheet, View, Button, ActivityIndicator } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { Ionicons } from '@expo/vector-icons';
export class QuizScreen extends React.Component {
  state = {
    loading: false
  };

  startQuiz = () => {
    const { loading } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: !loading });
    fetch(
      'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=base64'
    )
      .then(response => response.json())
      .then(({ results }) => {
        this.setState({ loading: false });
        navigation.navigate('MultipleChoiceRT', { questions: results });
      })
      .catch(err => {
        console.log('ERR->', err);
        // eslint-disable-next-line no-alert
        alert(`ERROR:${err.message}`);
        this.setState({ loading: false });
      });
  };

  startTrueFalse = () => {
    const { navigation } = this.props;
    navigation.navigate('TrueFalseRT');
  };

  render() {
    const { loading } = this.state;

    return (
      <View tyle={styles.container}>
        <View style={styles.multiple_choice_container}>
          {loading ? (
            <ActivityIndicator size="large" color="#008080" />
          ) : (
            <Button
              onPress={() => this.startQuiz()}
              title="MULTIPLE CHOICE"
              color="#008080"
            />
          )}
        </View>
        <View style={styles.true_false_container}>
          {loading ? (
            <ActivityIndicator size="large" color="#008080" />
          ) : (
            <Button
              style={styles.btn_style}
              title="TRUE OR FALSE"
              color="#008080"
              onPress={() => this.startTrueFalse()}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  true_false_container: {
    height: '50%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  multiple_choice_container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    backgroundColor: '#DCEDB9'
  }
});

import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home } from './app/views/Home.js';
import { Qa } from './app/views/Qa.js';
import { MultipleChoice } from './app/views/MultipleChoice.js';
import { Exam } from './app/views/Exam.js';
import { Font } from 'expo';
import { Settings } from './app/views/Settings.js';

const MyRoutes = StackNavigator(
  {
    HomeRT: {
      screen: Home
    },
    QaRT: {
      screen: Qa
    },
    MultipleChoiceRT: {
      screen: MultipleChoice
    },
    ExamRT: {
      screen: Exam
    },
    SettingsRT: {
      screen: Settings
    }
  },
  {
    initialRouteName: 'HomeRT'
  }
);

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      fredericath: require('./assets/fonts/FrederickatheGreat-Regular.ttf')
    });
  }

  render() {
    return <MyRoutes />;
  }
}

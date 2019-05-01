import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home } from './app/views/Home.js';
import { RateApp } from './app/views/RateApp.js';
import { Exam } from './app/views/Exam.js';
import { Font } from 'expo';
import { Settings } from './app/views/Settings.js';
import { QuizScreen } from './app/views/QuizScreen';
import { MultipleChoice } from './app/views/MultipleChoice';
import { ResultScreen } from './app/views/ResultScreen';
import { TrueFalse } from './app/views/TrueFalse';

const MyRoutes = StackNavigator(
  {
    HomeRT: {
      screen: Home
    },
    MultipleChoiceRT: {
      screen: MultipleChoice
    },
    RateAppRT: {
      screen: RateApp
    },
    ExamRT: {
      screen: Exam
    },
    SettingsRT: {
      screen: Settings
    },
    QuizScreenRT: {
      screen: QuizScreen
    },
    MultipleChoiceRT: {
      screen: MultipleChoice
    },
    TrueFalseRT: {
      screen: TrueFalse
    },
    ResultScreenRT: {
      screen: ResultScreen
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

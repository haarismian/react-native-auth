import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAq0FMWejyuhuI4QJO01KFMka3rua3ucqM',
      authDomain: 'authentication-85c98.firebaseapp.com',
      databaseURL: 'https://authentication-85c98.firebaseio.com',
      projectId: 'authentication-85c98',
      storageBucket: 'authentication-85c98.appspot.com',
      messagingSenderId: '967552364616'
    });
  }
  render() {
    return (
      <SafeAreaView>
        <Header headerText={'Authentication App'} />
        <Text>This is my app</Text>
      </SafeAreaView>
    );
  }
}

export default App;

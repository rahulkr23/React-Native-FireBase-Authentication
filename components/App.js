import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from './LoginForm'
import Articles from './Articles'
import Articles from './Articles'

class App extends Component {
  state = {
    loggedIn: true
  }
  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyD5uOgLTUU4ddU95U1FQkI0sgcSbL5luKY",
      authDomain: "otp-auth-efa1c.firebaseapp.com",
      projectId: "otp-auth-efa1c",
      storageBucket: "otp-auth-efa1c.appspot.com",
      messagingSenderId: "620916496649",
      appId: "1:620916496649:web:c5ed7ba4b3331b27a61bd8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />
      case true:
        return <Articles />
    }
  }

  render() {
    return (
      <view style={style.container}>
        {this.renderContent()}
      </view>
    );
  };
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default App;
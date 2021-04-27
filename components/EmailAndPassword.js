import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import Loading from './Loading';

class EmailAndPassword extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false

    }

    onBottomPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(this.onLoginSuccess).catch(err => {
            this.setState({
                error: err.message
            })
        })
    }
    onLoginSuccess = () => {
        this.setState({
            error: '',
            loading: false
        })
    }
    render() {
        return (
            <view style={style.container}>
                <TextInput placeholder="email" style={Styles.input} value={this.state.email} onChangeText={email => this.setState({ email })} />
                <TextInput placeholder="password" style={Styles.input} secureTextEntry value={this.state.password} onChangeText={password => this.setState({ password })} />
                <TouchableOpacity style={Styles.buttonContainer} onPress={this.onBottomPress}>
                    <text style={Styles.buttonText}>Login</text>


                </TouchableOpacity>
                <text style={style.errorText}>
                    {this.state.error}
                </text>
            </view>
        )
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20

    },
    input: {
        height: 40,
        backgroundColor: 'brown',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 7,
        fontSize: 15


    },
    errorText: {
        fontSize: 30,
        color: 'red',
        alignSelf: 'center',
        marginTop: 12
    },

    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonContainer: {
        padding: 15,
        backgroundColor: 'hotpink',
        borderRadius: '10'
    }


})
export default EmailAndPassword;
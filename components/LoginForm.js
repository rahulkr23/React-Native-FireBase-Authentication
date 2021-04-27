import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EmailAndPassword from './EmailAndPassword'

const LoginForm = () => {
    return (
        <view style={styles.container}>
            <view style={style}>

            </view>
            <view style={styles.emailAndPassword}>

            </view>
        </view>

    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    emailAndPassword:{
        flex:2

    }
})
export default LoginForm;
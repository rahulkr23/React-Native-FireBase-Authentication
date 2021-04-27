import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Articles = () => {
    return (
        <view style={style.container}>
            <view style={styles.articlesContainer}>
            <text style={styles.heading}>
            Welcome to Our Apps


            </text>
            <text style={styles.content}>
            You are successfully loggedIn
            </text>
            <TouchableOpacity style={{padding:20}} onPress={()=> firebase.auth().signOut()}>
            <text style={{color:'blue'}}>Logout</text>

            </TouchableOpacity>
             </view>
        </view>

    )
}
const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'


    },
    articlesContainer:{
        padding:10,
        borderBottomColor:'rgba(255,255,255,.7)',
        borderBottomWidth:7

    },
    heading:{
        fontSize:25,
        color:'black',
        marginBottom:10
        

    },
    content:{
        marginTop:12,
        fontSize:20,


    }

})
export default Articles;
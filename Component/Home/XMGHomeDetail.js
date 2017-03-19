/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var HomeDetail = React.createClass({
    render() {
        //alert(this.props.data);
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.popTopHome()}}>
                    <Text style={styles.welcome}>
                        收到从上个页面传来的如下值：
                        {this.props.data}

                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    popTopHome(){
        this.props.navigator.pop();
    }
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

// 输出组件类
module.exports = HomeDetail;

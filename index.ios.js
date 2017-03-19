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
    View
} from 'react-native';
/**------导入外部类-------**/
var Main=require('./Component/Main/XMGMain.js');
class shopping extends Component {
    render() {
        return (
            <Main/>
        );
    }
}



AppRegistry.registerComponent('shopping', () => shopping);

import { AppRegistry } from 'react-native';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor() {
        super();
        this.animated = new Animated.Value(0);
        Animated.timing(this.animated, {
            toValue: 2 * Math.PI,
            duration: 5000,
            useNativeDriver: true
        }).start()
    }
    render() {

        const radius = 100;

        return (
            <View style={styles.container}>
                <Animated.View style={{
                    transform: [
                        { translateX: Animated.multiply(Animated.cos(this.animated), radius) },
                        { translateY: Animated.multiply(Animated.sin(this.animated), radius) },
                        { rotate: this.animated }
                    ], width: 100, height: 100, backgroundColor: 'red'
                }}>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('SinCosTest', () => App);

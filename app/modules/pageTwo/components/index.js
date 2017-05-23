import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'antd-mobile';

export default class PageTwo extends Component {
    render() {
        const goback = () => Actions.pop();
        return (
          <View style={{marginTop: 120}}>
            <Text style={styles.text}>This is PageTwo!</Text>
            <Text style={styles.text}>{this.props.text}</Text>
            <TouchableOpacity onPress={goback}>
                <Text style={styles.redText}>back to pre ></Text>
            </TouchableOpacity>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
    },
    redText: {
        marginTop: 50,
        textAlign: 'center',
        color: 'red',
    }
})

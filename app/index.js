import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './modules/pageOne/containers';
import PageTwo from './modules/pageTwo/containers';

import connect from './connect';

export default class xian62 extends Component {
    componentWillMount() {
        connect();
    }
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="pageOne" component={PageOne} title="登陆" />
                    <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
                </Scene>
            </Router>
        );
    }
}

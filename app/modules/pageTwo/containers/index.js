import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';
import pageTwoComponent from '../components';

export default AccountContainer = createContainer((ownProps) => {
  return {
    // 这里可以放一些数据传到props中
  }
}, pageTwoComponent);

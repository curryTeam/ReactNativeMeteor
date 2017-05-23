import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import Button from  '../common/button';
import Meteor from 'react-native-meteor';
import { Tag } from 'antd-mobile';

const { width } = Dimensions.get('window');
export default class PageOne extends Component {
  constructor(props) {
    super(props);
  }
  login() {
      console.log('点击了login');
      if (this.state) {
        console.log(this.state.username);
        console.log(this.state.password);
        Meteor.loginWithPassword(this.state.username, this.state.password, (err, result) => {
          if(err) {
            console.log(err);
            alert('账号密码错误');
          } else {
            console.log(result);
            alert('登陆成功');
          }
        });
      } else {
        alert('请输入用户名密码');
      }
  }
  render() {
    const gotoPageTwo = () => Actions.pageTwo({ text: 'my name is curry liang' });
    return (
      <View style={styles.wrap}>
          <View style={styles.header}>
            <Text style={styles.title}></Text>
          </View>
          <View style={styles.container}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="用户名"
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(username) => this.setState({ username })}
                secureTextEntry={false}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="密码"
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View>
            <Button title="登陆" color='#841584' style={styles.button} onPress={ this.login.bind(this) }/>
          </View>
          <View>
            <Button title="测试路由>" color="red" style={styles.button} onPress={ gotoPageTwo } />
          </View>
          <View style={styles.tagWrap}>
            <Tag data-seed="logId">Basic</Tag>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
  },
  header: {
    margin: 80,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20
  },
  container: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    padding: 5,
    width: width - 64,
    backgroundColor: 'white'
  },
  button: {
    width: '100%',
    backgroundColor: 'red'
  }
})
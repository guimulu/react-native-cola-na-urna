import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class BoxNumber extends Component {
  state = {
    number: '0',
  }

  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>
          {this.state.number}
        </Text>
      </View>
    );
  }
}

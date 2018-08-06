import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import BoxNumber from 'components/BoxNumber';

export default class BoxCandidate extends Component {
  state = {
    number: '0',
  }

  render() {
    return (
      <View style={styles.box}>
        <BoxNumber />
        <BoxNumber />
      </View>
    );
  }
}

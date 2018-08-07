import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BoxNumber from 'components/BoxNumber';
import styles from './styles';

export default class Presidente extends Component {
  state = {
    number: '0',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.officeText}>Presidente</Text>
          <View style={styles.boxNumbers}>
            <BoxNumber />
            <BoxNumber />
          </View>
        </View>
        <View>
          <Text style={styles.nameText}>Lorem ipsum dolor sit amet</Text>
        </View>
      </View>
    );
  }
}
